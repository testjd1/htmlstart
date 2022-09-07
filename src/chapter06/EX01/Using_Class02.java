package chapter06.EX01;

// 클래스 ( 붕어빵 기계 )와 객체 ( 붕어빵 )의 차이점
// 클래스 : 객체를 만들기 위한 틀, 설계도 
// 객체(인스턴스) : 클래스를 통해서 만들어진 객체. 건물
/*		 
	1. 클래스 내부 요소
	필드 	: 클래스 블락에서 선언된 변수
	생성자 :  
	메소드 : 메소드 내부에 선언된 변수 ( 지역변수 )
	이너클래스 (내부클래스)	

*/

class A{
// 필드 : Heap 공간에 같이 저장 됨. 값을 넣지 않으면 강제 초기화가 됨
	int m = 3;
	int n = 4;
	
// 기본 생성자 : 클래스 이름과 동일한 메소드를 생성자, 리턴 타입이 없다.	
	A () {} // 생성자
	
	void print() {
		int k = 10 ; 			// 지역 변수 : Stack 공간에 값 저장, 값을 넣지 않으면 비어있음.
		System.out.println("k");
		System.out.println(m+n);
	}
	
	
}





public class Using_Class02 {

	public static void main(String[] args) {
		 int aa ;		// 지역 변수
		
		 // 객체 생성은 main 메소드에서 작성.
		 
		 A a = new A();
		 // A : 참조 변수 타입 : A
		 // a : 객체 (참조변수)
		 // new : Heap 메모리에 값을 넣어라.
		 // A() : 기본 생성자 호출
		 
		 // 객체의 필드의 내용 출력
		 System.out.println("=== 객체의 필드 값 출력 ====");
		 System.out.println(a.m); 		// 필드의 m값 출력
		 System.out.println(a.n);		// 필드의 n값 출력
		 
		 
		 // 객체의 메소드 호출
		 System.out.println(" === 객체의 메소드 호출===");
		 a.print();
		 System.out.println("====================================");
		 // =================================================
		 // A class : 틀 -> 객체화
		 // A clss 를 틀로 해서 b 객체 생성
		 A b =new A();
		 
		 b.m = 30;
		 b.n = 40;
		 
		 // 필드의 내용 출력
		 System.out.println(b.m);		// 30
		 System.out.println(b.n);		// 40
		 
		 
		 // 메소드 호출 : 기능 프로그램화
		 System.out.println( " == print() 메소드 호출 ====");
		 b.print();
		 
		 System.out.println("======= A class 를 틀로 해서 객체 무한대로 생성 ==============");
		 
		 
	}

}
