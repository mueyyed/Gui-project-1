/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pkg1306180132_vizeproject;

/**
 *
 * @author moayy
 */
public class Main {

    // bu fonksiyon polimorfizm konseptini uygulamak amaciyla olusturuyor
   static void kisiTipi(Kisi obj)
   {
       if(obj instanceof Yonticisi){}  
       if(obj instanceof Personel){}  
       if(obj instanceof Yonticisi){}  
   }  

    public static void main(String[] args) {
        // TODO code application logic here
         GUI ob=new GUI(); 
    }
    
}
