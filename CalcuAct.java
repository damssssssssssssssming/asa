/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package calcu.act;

/**
 *
 * @author ACER
 */
import java.util.Scanner;
public class CalcuAct {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
         String answer = null;  
         do{
        try {
        System.out.println( "eEnter First Number :");
        int num1 = input.nextInt();
        System.out.println(" Entere Secondnumber :");
        int num2 = input.nextInt();
        
        int num = num1/num2;
        System.out.println("output");
        System.out.println( num1/num2);
        System.out.println("do you want to calculate another? Yes or No");
        answer =input.next();
        

    
           
        } catch(Exception e){
    System.out.println("you can't devided by zero");
}
    }
    while (answer.equals("yes"));
}
    }
    

