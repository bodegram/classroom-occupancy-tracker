from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes,
)
from .serializers import *
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


# Create your views here.
@api_view(["POST"])
def login(request):
    if request.method == "POST":
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            if CustomUser.objects.filter(email=email).exists():
                user = CustomUser.objects.get(email=email)
                if user.check_password(password):
                    token, created = Token.objects.get_or_create(user=user)
                    return Response(
                        {
                            "message": "Login successfully",
                            "token": token.key,
                            "data": {
                                "username": user.username,
                                "email": user.email,
                                "firstname": user.first_name,
                                "lastname": user.last_name,
                            },
                        }
                    )
                else:
                    return Response(
                        {"message": "Incorrect credentials"}, status=status.HTTP_200_OK
                    )

            else:
                return Response({"message": "Incorrect credentials"})

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def register(request):
    if request.method == "POST":
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(
                {"message": "Account successfully", "data": serializer.data},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def profile(request):
    query = CustomUser.objects.get(email=request.user)
    serializer = ProfileSerializer(query)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def editProfile(request):
    if request.method == "PUT":
        query = CustomUser.objects.get(email=request.user)
        serializer = EditProfileSerializer(query, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"message": "Profile updated"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
