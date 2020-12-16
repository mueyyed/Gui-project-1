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
 abstract class Kisi 
{
    String Ad; 
    String Soyad; 
    String Eposta ; 
    String Adres; 
    double Sifre;

    public Kisi(String Ad, String Soyad , String Eposta, String Adres,double Sifre)
    {
        this.Ad=Ad; 
        this.Soyad=Soyad; 
        this.Eposta=Eposta; 
        this.Adres=Adres; 
        this.Sifre=Sifre; 
    }
    
    abstract void sifre_degistir(double str);
    
    abstract boolean Login(String ad , double sifre); 
    
   
}
