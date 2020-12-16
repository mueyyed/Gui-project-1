package pkg1306180132_vizeproject;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author moayy
 */
public class Musteri extends Kisi 
{
    double bakiye; 

    public Musteri(String Ad, String Soyad, String Eposta, String Adres, double Sifre, double adder) {
        super(Ad, Soyad, Eposta, Adres, Sifre);
    }
    
    double bakiyeOgrenme(){return bakiye;}
    double bakiyeArttirme(double miktar)
    {
        bakiye+=miktar; 
        return bakiye;
    }

    @Override
    void sifre_degistir(double str) {
       this.Sifre=str; 
    }

    public boolean Login(String ad , double sifre) {
        if(this.Ad==ad && this.Sifre==sifre)
        {
            return true; 
        }
        return false; 
    }
 
}
