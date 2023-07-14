# Get Open-JDK image
FROM amazoncorretto:latest

#Copy scipt to conatiner
COPY ./entrypoint.sh /


# Compile java file
RUN javac Hello.java

#execute program
CMD ["java", "Hello"]