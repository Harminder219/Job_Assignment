package com.question2;

public class Main {
    
	static int start=0,maxlength=0;
	
	public static void main(String[] args) {
		
		String string="cbbd";
		

        for(int i=0;i<string.length();i++)
        {
            expandAroundCentre( string,i,i);
            expandAroundCentre( string,i,i+1);
            
        }
        
       System.out.print(string.substring(start,start+maxlength));
		
	}
	
	public static void expandAroundCentre(String s,int left,int right) {
		
		
		 while(left >=0 && right < s.length() && s.charAt(left)==s.charAt(right))
	        {
	            left--;
	            right++;
	        }
	        
	        if(maxlength < right-left-1)
	        {
	             maxlength=right-left-1;
	             start=left+1;
	        }
	}
	
}
