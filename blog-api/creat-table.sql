

CREATE TABLE "user" (
	id serial4 NOT NULL,
	username varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);


CREATE TABLE person (
	id bigserial NOT NULL,
	cpf varchar(11) NOT NULL,
	"name" varchar(100) NOT NULL,
	birth date NOT NULL,
	email varchar(255) NOT NULL,
	user_id int4 NULL,
	CONSTRAINT person_pkey PRIMARY KEY (id),
	CONSTRAINT person_user_id_key UNIQUE (user_id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES "user"(id)
);



CREATE TABLE posts (
	id serial4 NOT NULL,
	description varchar(100) NOT NULL,
	post_text text NOT NULL,
	author varchar(255) NOT NULL,
	user_id int4 NULL,
	CONSTRAINT posts_pkey PRIMARY KEY (id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES "user"(id)
);


