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
public class Personel extends Kisi {

    public Personel(String Ad, String Soyad, String Eposta, String Adres, double Sifre) {
        super(Ad, Soyad, Eposta, Adres, Sifre);
    }

    
    boolean kredikartLimitGuncelleme(double newBakiye , double oldBakiye)
    {
        if(newBakiye >oldBakiye+1000)
        {
            return true; 
           // return newBakiye + newBakiye*(0.01);
        }
        return false; 
    }
    
    boolean kredikartOnayVerme(double bakiye)
    {
        if(bakiye >2000)
        {
            return true; 
        }
        return false; 
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
