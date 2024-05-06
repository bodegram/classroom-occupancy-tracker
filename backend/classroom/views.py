from django.shortcuts import render
from .models import Classroom
from .serializers import ClassroomSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes,
)


# Create your views here.
@api_view(["GET"])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def classrooms(request):
    query = Classroom.objects.all()
    serializer = ClassroomSerializer(query, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def classroom(request, id):
    try:
        query = Classroom.objects.get(id=id)
        serializer = ClassroomSerializer(query)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Classroom.DoesNotExist:
        return Response(
            {"message": "Classroom Not found"}, status=status.HTTP_400_BAD_REQUEST
        )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def bookRoom(request, id):
    try:
        query = Classroom.objects.get(id=id)
    except Classroom.DoesNotExist:
        return Response({"message": "Classroom Not Found"})
    if request.method == "GET":
        if query.isOccupied == True:
            return Response({"message": "Classroom currently in use", "status": 400})

        else:
            query.isOccupied = True
            query.save()
            return Response(
                {"message": "You have booked this classroom", "status": 200}
            )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def unBookRoom(request, id):
    try:
        query = Classroom.objects.get(id=id)
    except Classroom.DoesNotExist:
        return Response({"message": "Classroom Not Found"})
    if request.method == "GET":
        if query.isOccupied == False:
            return Response({"message": "Classroom already unbooked", "status": 400})
        else:
            query.isOccupied = False
            query.save()
            return Response(
                {"message": "Classroom successfully unbooked", "status": 200}
            )
