package change_teacher_review.basic3;

public class Ex03_CallByString {


	public static void main(String[] args) {

		String a = new String("안녕");
		String b = new String("하이");

		
		add(a,b);
		System.out.println("A = "+ a + ", B = "+ b);		//A= 안녕, B= 하이
	}
	
	static void add(String a, String b) {
		a+=b;
		System.out.println("A = "+ a + ", B = "+ b);  		//A= 안녕하이,B= 하이
	}
}
