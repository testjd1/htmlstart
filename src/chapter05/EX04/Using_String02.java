package chapter05.EX04;

public class Using_String02 {

	public static void main(String[] args) {
	/*	
		String 변수에 값 할당
		1. 객체 생성 방식으로 할당			// 별도의 주소 공간에 값 할당 ( 동일한 문자열 )
		2. 리터럴 방식으로 할당			// 주소공간 공유 ( 동일한 문자열 일 경우 )
		== : 스택공간의 값 비교			( 참조자료형 : 스택 (주소), 힙 ( 값)
									( 기본 자료형 : 스택 (값) )
									
		equals() : 참조자료형일때 힙 영역의 값 비교
		
		
		
		
	*/	
		
		String str1 = new String("안녕");
		String str2 = "안녕";
		String str3 = "안녕";
		String str4 = new String("안녕");
		
		System.out.println(str1);
		System.out.println(str2);
		System.out.println(str3);
		System.out.println(str4);
	
		System.out.println("=======================================================================");
		// == : 참조 자료형일 경우 Stack의 힙 영역 주소 비교
		System.out.println(str1 == str4);								// false
		System.out.println(str3 == str2);								// true
		
		
		// equals() : 참조자료형의 힙 영역 값을 비교
		System.out.println(str1.equals(2));
		System.out.println(str2.equals(3));
		System.out.println(str3.equals(4));
	
	}

}
