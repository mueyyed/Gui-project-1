// Name: MUEYYED GARZUDDIN
 // No  : 1306180132


package pkg1306180132_vizeproject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;
import java.util.Vector;
import javax.swing.Icon;
import javax.swing.JOptionPane;

/**
 * abstract Storage { public static boolean addPerson(String Ad, String Soyad,
 * String Eposta, String Sifre, String kisiTipi) ; } public class FileStorage
 * extends Storage{
 *
 * }
 * public class SqlStorage extends Storage{ // TODO later }
 *
 */
/**
 *
 * @author moayy
 */
public class Database extends StorageAbstract {

    public static Vector<Musteri> veriMusteri = new Vector<Musteri>();
    public static Vector<Personel> veriPersonel = new Vector<Personel>();
    public static Vector<Yontici> veriYontici = new Vector<Yontici>();

    // this instruction to apply interface to Personel and Musteri
    public static Personel ob1 = new Personel();
    public static Musteri ob2 = new Musteri();
    public static Yontici ob3 = new Yontici();

    // get adta from vectors  
    public static void loadData() throws FileNotFoundException, IOException {
        // instructions to read from file 
        veriMusteri.clear();
        veriPersonel.clear();
        veriYontici.clear();
        //Reading first file  
        File file1 = new File("Files/file1.txt");
        FileReader fileReader1 = new FileReader(file1);
        BufferedReader br1 = new BufferedReader(fileReader1);
        String line1;
        while ((line1 = br1.readLine()) != null) {
            if (line1.equals(" ")) {
                break;
            }
            Musteri m = Musteri.parse(line1);
            veriMusteri.add(m);
        }
        //Reading second files
        File file2 = new File("Files/file2.txt");
        FileReader fileReader2 = new FileReader(file2);
        BufferedReader br2 = new BufferedReader(fileReader2);
        String line2;
        while ((line2 = br2.readLine()) != null) {
            if (line2.equals(" ")) {
                break;
            }
            Personel m = Personel.parse(line2);
            veriPersonel.add(m);
        }
        //Reading third file

        File file3 = new File("Files/file3.txt");
        FileReader fileReader3 = new FileReader(file3);
        BufferedReader br3 = new BufferedReader(fileReader3);
        String line3;
        while ((line3 = br3.readLine()) != null) {
            if (line3.equals(" ")) {
                break;
            }
            Yontici m = Yontici.parse(line3);
            veriYontici.add(m);
        }
    }

    public static void saveData() throws FileNotFoundException, IOException {

        // applying the idea of polymorphism 
        Vector<Kisi> temp = new Vector<Kisi>();

        veriMusteri.forEach(
                (saveDataMusteri)
                -> {
            temp.add(saveDataMusteri);
        }
        );
        // converting data from class to string 
        SaveKisiler("Files/file1.txt", temp);

        temp.clear();
        veriPersonel.forEach((saveDataCustomer) -> {
            temp.add(saveDataCustomer);
        });
        SaveKisiler("Files/file2.txt", temp);

        temp.clear();
        veriYontici.forEach((saveDataManager) -> {
            temp.add(saveDataManager);
        });
        SaveKisiler("Files/file3.txt", temp);
    }
    
      public static void SaveKisiler(String file, Vector<Kisi> kisiler) throws IOException {

        FileWriter fr1 = new FileWriter(file);
        fr1.write("");
        fr1.close();

        FileWriter fileWriter1 = new FileWriter(file);

        int counter = 0;
        for (int i = 0; i < kisiler.size(); i++) {
            fileWriter1.write(kisiler.elementAt(i).toStringData());
            counter++;
            if (counter != kisiler.size()) {
                fileWriter1.write("\n");
            }
        }

        fileWriter1.close();
    }
    
    public static boolean addPerson(String Ad, String Soyad, String Eposta, String Sifre, String kisiTipi) {
        if (Ad.equals("") || Soyad.equals("") || Eposta.equals("") || Sifre.equals("") || kisiTipi.equals("")) {
            return false;
        }
        Kisi kisi;
        switch (kisiTipi) {
            case "Musteri":
                veriMusteri.add(ob2.addMusteri(Ad, Soyad, Eposta, Sifre));
                return true;

            case "Personel":
                veriPersonel.add(ob1.addPersonel(Ad, Soyad, Eposta, Sifre));
                return true;

            case "Yontici":
                veriYontici.add(ob3.addYonetici(Ad, Soyad, Eposta, Sifre));
                return true;
            default:
                break;
        }
        return false;
    }

    public static boolean deletePerson(String Ad, String Soyad, String Eposta, String Sifre, String kisiTipi) {
        if (Ad.equals("") || Soyad.equals("") || Eposta.equals("") || Sifre.equals("") || kisiTipi.equals("")) {
            return false;
        }
        Kisi kisi;
        switch (kisiTipi) {
            case "Musteri": {
                for (int i = 0; i < Database.veriMusteri.size(); i++) {
                    if (Database.veriMusteri.elementAt(i).Ad.equals(Ad)
                            && Database.veriMusteri.elementAt(i).Soyad.equals(Soyad)
                            && Database.veriMusteri.elementAt(i).Sifre.equals(Sifre)) {
                        Database.veriMusteri.removeElementAt(i);
                        return true;
                    }
                }
                break;
            }

            case "Personel": {
                for (int i = 0; i < Database.veriPersonel.size(); i++) {
                    if (Database.veriPersonel.elementAt(i).Ad.equals(Ad)
                            && Database.veriPersonel.elementAt(i).Soyad.equals(Soyad)
                            && Database.veriPersonel.elementAt(i).Sifre.equals(Sifre)) {
                        Database.veriPersonel.remove(i);
                        return true;
                    }
                }
                break;
            }
            case "Yontici": {
                for (int i = 0; i < Database.veriYontici.size(); i++) {
                    if (Database.veriYontici.elementAt(i).Ad.equals(Ad)
                            && Database.veriYontici.elementAt(i).Soyad.equals(Soyad)
                            && Database.veriYontici.elementAt(i).Sifre.equals(Sifre)) {
                        Database.veriYontici.remove(i);
                        return true;
                    }
                }
                break;
            }
            default:
                break;
        }
        return false;
    }

    @Override
    public String getStroageMethod() {
        return "This Storage Method Use Text Files";
    }

    @Override
    public int getModelsCount() {
        return 4;// we have 4 files
    }

}
