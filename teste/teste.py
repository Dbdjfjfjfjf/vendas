import time
import requests
import webbrowser as web
import pyautogui as pg
import pyttsx3

class WhatsappMessage:

    def __init__(self,phone_no, message, time_hour, time_min):

        if time_hour == 0:
            time_hour = 24
        callsec = (time_hour*3600)+(time_min*60)

        print("----- CARREGANDO")

        curr = time.localtime()
        currhr = curr.tm_hour
        currmin = curr.tm_min
        currsec = curr.tm_sec

        currtotsec = (currhr*3600)+(currmin*60)+(currsec)
        lefttm = callsec-currtotsec

        if lefttm <= 0:
            lefttm = 86400+lefttm

        if lefttm < 25:
            raise Exception("Call time must be greater than one minute")

        else:
            sleeptm = lefttm-25
            print("----- AGUARDANDO")
            time.sleep(sleeptm)
            web.open('https://web.whatsapp.com/send?phone='+str(phone_no)+'&text='+str(message))
            time.sleep(25)
            print("----- ENVIANDO MENSAGEM")
            pg.press('enter')
            print("----- MENSAGEM ENVIADA!")

if __name__ == "__main__":
    WhatsappMessage(5585994250250,"Mensagem",0,0)
   #WhatsappMessage(TELEFONE,MENSAGEM,HORA,MINUTO)