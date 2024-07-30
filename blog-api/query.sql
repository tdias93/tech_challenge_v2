-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	id serial4 NOT NULL,
	username varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public."user" OWNER TO "user";
GRANT ALL ON TABLE public."user" TO "user";


-- public.person definition

-- Drop table

-- DROP TABLE public.person;

CREATE TABLE public.person (
	id bigserial NOT NULL,
	cpf varchar(11) NOT NULL,
	"name" varchar(100) NOT NULL,
	birth date NOT NULL,
	email varchar(255) NOT NULL,
	user_id int4 NULL,
	CONSTRAINT person_pkey PRIMARY KEY (id),
	CONSTRAINT person_user_id_key UNIQUE (user_id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id)
);

-- Permissions

ALTER TABLE public.person OWNER TO "user";
GRANT ALL ON TABLE public.person TO "user";


-- public.posts definition

-- Drop table

-- DROP TABLE public.posts;

CREATE TABLE public.posts (
	id serial4 NOT NULL,
	description varchar(100) NOT NULL,
	post_text text NOT NULL,
	author varchar(255) NOT NULL,
	user_id int4 NULL,
	CONSTRAINT posts_pkey PRIMARY KEY (id),
	CONSTRAINT posts_user_id_key UNIQUE (user_id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id)
);

-- Permissions

ALTER TABLE public.posts OWNER TO "user";
GRANT ALL ON TABLE public.posts TO "user";