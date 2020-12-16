package pkg1306180132_vizeproject;

import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

public class GUI extends JFrame {

    GUI() {
        this.execute();
    }

    public void execute() {
        // variabls 
        JFrame frame = new JFrame();

        // labels 
        JLabel L1 = new JLabel("password"), L2 = new JLabel("username"),
                L3 = new JLabel("Subject"), L4 = new JLabel("Gender"), L5 = new JLabel("Satus"),
                L6 = new JLabel("c#"), L7 = new JLabel("C++"), L8 = new JLabel("Java"),
                L9 = new JLabel("Male"), L10 = new JLabel("Female"),
                L11 = new JLabel("married"), L12 = new JLabel("single");

  // Menus addition 
        // names of menus 
        JMenu m1 = new JMenu("File"), m2 = new JMenu("Edit"), m3 = new JMenu("Help");
        // creating bar to keep menus 
        JMenuBar bar = new JMenuBar();
        // BUTTONS TO BE KEPT IN MENUS 
        JButton ab1 = new JButton("menu1"),ab2 = new JButton("menu2"),
                ab3 = new JButton("menu3"),ab4 = new JButton("menu1"),
                ab5 = new JButton("menu2"),ab6 = new JButton("menu3");

        // creating Buttons Check box 
        JCheckBox r1 = new JCheckBox(), r2 = new JCheckBox(), r3 = new JCheckBox();
        JRadioButton R1 = new JRadioButton(), R2 = new JRadioButton(),
                R3 = new JRadioButton(), R4 = new JRadioButton();
        
        // creating normal button 
        JButton b1 = new JButton("save"), b2 = new JButton("show");
        
        // creating a group buttons 
        ButtonGroup g1 = new ButtonGroup(), g2 = new ButtonGroup(), g3 = new ButtonGroup();   // group buttons

        // fields for Writing 
        JTextField field1 = new JTextField();
        JPasswordField field2 = new JPasswordField();

        /*________________________________________________________________________________________________*/
 // Execution for frame  
        this.setSize(600, 500);
        this.setVisible(true);
        this.setTitle("Automation of ATM/bank");
        this.setLocation(60, 90);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(true);
        this.setLayout(null);

 // PUT THE PASSWORD AND FIELDS OF THEM 
      // BUTTON OF SHOW AND BUTTON OF SAVE
        b1.setBounds(280,120,90,25);
        b2.setBounds(380,120,90,25);
        // FIELD OF PASSWORD AND USER NAME 
        field1.setBounds(200,40, 120,20);
        field2.setBounds(200,80, 120,20);
        // LABEL OF PASSWORD AND USER NAME 
        L1.setBounds(10, 40,60, 40);
        L2.setBounds(10, 70, 70, 40);
        this.add(L1); this.add(L2); 
        this.add(field1);this.add(field2);   
        
 // SUBJECT ADDITION 
     // ADDING C#
        L3.setBounds(10, 160, 60, 40);
        r1.setBounds(110 ,170, 20, 20);        
        L6.setBounds(90 ,170, 20, 20); 
     // ADDING C++
        r2.setBounds(180 ,170, 20, 20);
        L7.setBounds(150 ,170, 30, 20);
    //ADDING JAVA 
        r3.setBounds(250 ,170, 20, 20);
        L8.setBounds(220 ,170, 30, 20);
        
// ADDITION GENDER
     // ADDING MALE AND BUTTON 
        L4.setBounds(10, 200, 60, 40);
        L9.setBounds(80, 200, 50, 40);
        R2.setBounds(150, 210, 20, 20);
     // ADDING FEMALE AND BUTTON 
        L10.setBounds(190, 200, 60, 40);
        R1.setBounds(240, 200, 60, 40);   
        
// ADDING MARTIAL STATUS 
// ADDING THE LABEL STATUS 
        L5.setBounds(10, 230, 60, 40);
    // ADDING THE LABEL MARRIED AND SINGLE 
        L11.setBounds(80, 240, 60, 20);
        L12.setBounds(190, 240, 60, 20);
   // ADDING THE TWO IMPORTANT BUTTONS
        R3.setBounds(150, 240, 20, 20);
        R4.setBounds(240, 240, 20, 20);
        // ADD ELEMENTS INTO THE FRAME 
        this.add(b1);this.add(b2);
        this.add(L3);this.add(L3);this.add(L4);this.add(L5);
        this.add(r1);this.add(r2);this.add(r3);
        this.add(L6);this.add(L7);this.add(L8);this.add(L9);this.add(L10);this.add(L11); this.add(L12);
        this.add(R1);this.add(R2);this.add(R3);this.add(R4);  
        
       // making 
        g2.add(R1);g2.add(R2);
        g3.add(R3);g3.add(R4);

        // add bar and menu
        {
        bar.setBackground(Color.ORANGE);
        bar.setBounds(0,0,600, 25);
        m1.add(ab1);m1.add(ab2);m1.add(ab3);m2.add(ab4);
        m2.add(ab5);bar.add(m2); bar.add(m3); 
        bar.add(m1);bar.add(m2);bar.add(m3); 
        this.add(bar);
        }
  

    }
}


/*public void execute() {

        JFrame frame = new JFrame();
        JPanel p1 = new JPanel();
        JPanel p2 = new JPanel();
        JPasswordField pass = new JPasswordField();
        JButton b1 = new JButton("1");
        JButton b2 = new JButton("2");
        JButton b3 = new JButton("3");
        JButton b4 = new JButton("4");
        JButton b5 = new JButton("5");
        JButton b6 = new JButton("6");
        JButton b7 = new JButton("7");
        JButton b8 = new JButton("8");
        JButton b9 = new JButton("9");
        JButton b0 = new JButton("0");
        JButton bx = new JButton("x");
        JButton bADD = new JButton("+");
        JButton bSub = new JButton("-");

        this.setSize(500, 400);
        this.setTitle("Calculator");
        this.setVisible(true);
        this.setLocation(50, 50);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        p1.setBackground(Color.white);
        p2.setBackground(Color.orange);
        pass.setBounds(200, 60, 160, 25);
        this.setLayout(new GridLayout(2, 1));
        p1.setLayout(new BorderLayout());
        p2.setLayout(null);

        p2.setLayout(new GridLayout(4, 8, 9, 5));
        p2.add(b1);
        p2.add(b2);
        p2.add(b1);
        p2.add(b3);
        p2.add(b4);
        p2.add(b5);
        p2.add(b6);
        p2.add(b7);
        p2.add(b8);
        p2.add(b9);
        p2.add(b0);
        p2.add(bADD);
        p2.add(bSub);

        p1.add(pass);

        this.setBackground(Color.yellow);
        this.add(p1);
        this.add(p2);

    }*/
 /*
        JFrame frame;
        frame = new JFrame();

        JPanel pan1 = new JPanel();
        JPanel pan2 = new JPanel();

        Button b1 = new Button("Login"), b2 = new Button("Sifre");
        Button b3 = new Button("Login1"), b4 = new Button("Sifre2");

        JPasswordField field1 = new JPasswordField();
        JPasswordField field2 = new JPasswordField();

        setTitle("ATM---Otomasonu ");
        setSize(400, 300);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBackground(Color.BLUE);
        setResizable(true);
        setLocation(100, 100);
        setLayout(null);

        pan1.setBackground(Color.ORANGE);
        pan2.setBackground(Color.BLUE);
        add(pan1);
        add(pan2);

     
        b1.setBounds(100, 10, 60, 50);
        b2.setBounds(200, 10, 60, 50);
        b3.setBounds(100, 200, 60, 50);
        b4.setBounds(200, 200, 60, 50);
        field1.setBounds(100, 120, 90, 25);
        field2.setBounds(200, 120, 90, 25);

        this.add(b1);
        this.add(b2);
        this.add(b3);
        this.add(b4);
        this.add(field1);
        this.add(field2);
        
        b1.setBackground(Color.red);
        b2.setBackground(Color.cyan);
        b3.setBackground(Color.green);
        b4.setBackground(Color.yellow);
        field1.setBackground(Color.PINK);
        field2.setBackground(Color.PINK);
        

        this.add(field1);*/
