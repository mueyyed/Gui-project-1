package pkg1306180132_vizeproject;

 


 
public class Yonticisi extends Kisi {

    public Yonticisi(String Ad, String Soyad, String Eposta, String Adres, double Sifre) {
        super(Ad, Soyad, Eposta, Adres, Sifre);
    }

    double kredikart_LimitSonKarari(double newBakiye)
    {
        return newBakiye + newBakiye*(0.01);
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
