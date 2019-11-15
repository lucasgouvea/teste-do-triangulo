run-mongo:
	docker run --rm -p 27017:27017 --name mongo \
		-e MONGO_INITDB_ROOT_USERNAME=root \
		-e MONGO_INITDB_ROOT_PASSOWRD=1q2w3e \
		gcr.io/steel-math-257901/mongo-triangle
