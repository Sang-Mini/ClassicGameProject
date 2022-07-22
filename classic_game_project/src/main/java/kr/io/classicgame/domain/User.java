package kr.io.classicgame.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class User {
	
	@Id
	private String id;
	
	private String pw;
	
	@Column(unique=true)
	private String mail;
	
	private String name;
	
	@Column(unique=true)
	private String nickname;
	
}
