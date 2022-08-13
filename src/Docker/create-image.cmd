docker build --no-cache -f SQL\Dockerfile.PostgreSql -t informacionnokonsultacionnaya_sistema/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t informacionnokonsultacionnaya_sistema/app ../..
