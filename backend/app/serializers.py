from rest_framework import serializers
from .models import *


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["email", "password", "username"]

    def create(self, validated_data):
        email = validated_data.get("email")
        username = validated_data.get("username")
        password = validated_data.get("password")
        user = CustomUser(email=email, username=username)
        user.set_password(password)
        user.save()
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"




class EditProfileSerializer(serializers.ModelSerializer):
    class Meta:        
        model = CustomUser
        fields = ['first_name', 'last_name']
        


