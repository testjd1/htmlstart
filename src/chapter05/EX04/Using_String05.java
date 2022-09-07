package chapter05.EX04;

import java.util.Arrays;

public class Using_String05 {

	public static void main(String[] args) {
/*
		String의 주요한 특징 : 다른 클래스에는 없는 특별한 기능
		1. 수정이 불가능하다 -> 새로운 값 힙 영역에 생성
		2. 리터럴로 변수의 값 넣음 -> 동일한 문자열은 주소 공유
		3. 객체 자체를 출력 => 객체의 주소가 출력되는 것이 아니라 객체의 값 출력
				(toString() 메소드가 재 정의 되어있음. )
		4. 다양한 메소드 정의
				
		
*/		
		
		// 1. 문자열의 길이 ( length() : 글자수)
		
		String str1 = "Hello Java!";
		String str2 = "안녕하세요! 반갑습니다.";
		
		System.out.println(str1.length());		// 11
		System.out.println(str2.length());		// 13
		System.out.println("=========================");
		
		
		
		// 2. 문자열 검색 ( charAt(), indexOf(). lastIndexOf())
		// 2-1 charAt() : 해당 index (방 번호)의 문자를 가져옴. 
		
		System.out.println(str1.charAt(0));		// H
		System.out.println(str1.charAt(4));		// o
		System.out.println(str1.charAt(6));		// J
		
		System.out.println(str2.charAt(3));		// 세
		System.out.println(str2.charAt(5));		// !
		System.out.println("=========================");
		
		// 2-2. indexOf() : 해당 글자에 대한 방 번호를 출력, 왼쪽 -> 오른쪽
		//		lastIndexOf() : 해당 글자에 대한 방 번호를 출력, 오른쪽 -> 왼쪽
		
		System.out.println(str1.indexOf('a'));		 // 7
		System.out.println(str1.lastIndexOf('a'));	 // 9
		System.out.println(str1.indexOf('a',8));	 //  9 : a를 8번 이후부터 검색 (좌->우)
		System.out.println(str1.lastIndexOf('a',8)); // 7 : a를 8번이후부터 검색 (우->좌)
		
		// "Java" 문자열의 방 번호 찾음/
		System.out.println(str1.indexOf("Java"));	 // 6
		System.out.println(str1.lastIndexOf("Java"));// 6
		
		System.out.println(str2.indexOf("하세요"));	 // 2
		
		// 없는 내용 검색 = -1
		System.out.println(str2.lastIndexOf("bye")); // -1
		System.out.println(str2.indexOf("고맙습니다"));	 // -1
		
		System.out.println(str2.indexOf("반갑습니다"));	 // 7
		System.out.println("=========================");
		
		// 3. 문자열 변환 및 연결 (String.valueOF(), concat())
		String str3 = String.valueOf(2.3);		// double -> String
		String str4 = String.valueOf(false);	// boolean -> String
		
		System.out.println(str3);
		System.out.println(str4);
		
		String str5 = str3.concat(str4); 		// + 와 같음.
		System.out.println(str5);
		System.out.println("=========================");
		
		
		// 4. 문자열 => byte[] (getBytes())
		//    문자열 => char[] (toCharArray())
		
		String str8 = "Hello Java!";
		String str9 = "안녕하세요";
		
		byte[] arr1 = str8.getBytes();		// 영문인 경우 아스키코드로 배열에 저장
		byte[] arr2 = str9.getBytes();
		
		System.out.println(Arrays.toString(arr1));		// 문자의 아스키코드
		System.out.println(Arrays.toString(arr2));		// 문자 -> 숫자코드로 변환
		System.out.println("=========================");
		
		// 문자열을 char[] 배열에 저장 
		char[] arr3 = str8.toCharArray();
		char[] arr4 = str9.toCharArray();
		
		System.out.println(Arrays.toString(arr3));		
		System.out.println(Arrays.toString(arr4));	
	}

}
