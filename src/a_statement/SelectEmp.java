package a_statement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class SelectEmp {
	public static void main(String[] args) {
		// 1. 드라이버 로딩
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			System.out.println("드라이버 로딩 성공");

			// 2. 연결객체 얻어오기
			String url = "jdbc:oracle:thin:@192.168.0.55:1521:xe";
			String user = "scott";
			String pass = "tiger";

			Connection con = DriverManager.getConnection(url, user, pass);
			System.out.println("디비 연결 성공2");

			// 3. SQL 문장
			String sql = "SELECT empno, ename, sal, job From emp";

			// 4. SQL 전송 객체
			Statement stmt = con.createStatement();

			// 5. SQL 전송
			/*
			 * 	- ResultSet executeQuery() : SELECT
			 *  - int executeUpdate() : INSERT/DELETE/UPDATE
			 * 
			 */
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()) {
				int empno = rs.getInt("EMPNO");
				String ename = rs.getString("ENAME");
				int sal = rs.getInt("SAL");
				String job = rs.getString("JOB");
				System.out.println(empno + "/" + ename + "/" + sal + "/" + job);
			}
			
			
			// 6. 닫기
			rs.close();
			stmt.close();
			con.close();

		}catch(Exception e) {
			System.out.println("실패 : " + e);
		}

	}
}
