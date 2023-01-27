## Polecenia AWS Cli

* EC2: aws ec2 describe-instances - Polecenie służy do wyświetlania informacji o instancjach, które są aktualnie uruchomione w środowisku Amazon Elastic Compute Cloud (EC2). Zwraca informacje o identyfikatorze i typie instancji, bieżącym stanie instancji czy adresie IP.

![obraz](https://user-images.githubusercontent.com/92359764/215222021-66280a53-a501-4eda-8e81-67541f808167.png)
![obraz](https://user-images.githubusercontent.com/92359764/215222061-44eaada6-e6b2-445b-b89a-e877f9c1d6df.png)

* S3: aws s3 ls - Polecenie służy do wyświetlania zawartości bucketu S3. Zwraca informacje, takie jak nazwy obiektów w buckecie, rozmiary i daty ostatniej modyfikacji.

![obraz](https://user-images.githubusercontent.com/92359764/215222134-2c03dae5-7782-4a94-9d47-9cf17ff9e1da.png)

* VPC: aws ec2 describe-vpcs - Polecenie służy do wyświetlania informacji o VPC. Zwraca informacje na temat takie jak identyfikator VPC, blok CIDR powiązany z VPC, opcje DHCP ustawione dla VPC oraz bieżący stan VPC.

![obraz](https://user-images.githubusercontent.com/92359764/215222194-e576c271-0354-41c8-8797-c4e59253f5e6.png)

* RDS: aws rds describe-db-instances - Polecenie służy do wyświetlania informacji o instancjach RDS. Zwraca informacje, takie jak identyfikator instancji, bieżący stan instancji, endpoint i typ storage'u.

![obraz](https://user-images.githubusercontent.com/92359764/215222254-d8359f70-a291-4e1e-a59b-879b5ed9ced3.png)
![obraz](https://user-images.githubusercontent.com/92359764/215222273-8a443d27-d200-4116-8294-3277ac02129e.png)

* EBS: aws ebs describe-volumes - To polecenie służy do wyświetlania informacji o woluminach EBS. Zwraca informacje o identyfikatorze woluminu, bieżącym stanie woluminu, rozmiarze woluminu i strefie dostępności, w której znajduje się wolumin.

![obraz](https://user-images.githubusercontent.com/92359764/215222411-9dbb361b-e416-4a86-aab4-431f6e97fb27.png)

* CloudWatch: aws cloudwatch describe-alarms - Polecenie służące do wyświetlania informacji o alarmach Amazon CloudWatch. CloudWatch to usługa monitorowania zasobów AWS i aplikacji. Alarmy w CloudWatch umożliwiają otrzymywanie powiadomień lub wykonywanie działań w oparciu o skonfigurowane progi dla danych metrycznych. Polecenie zwraca informacje, takie jak nazwa alarmu, aktualny stan alarmu (np. OK, ALARM), działania alarmu (np. wysłanie wiadomości SNS lub uruchomienie polityki automatycznego skalowania) oraz okres alarmu. Można także użyć tego polecenia, aby wyświetlić listę alarmów dla określonej metryki lub dla określonej przestrzeni nazw.

![obraz](https://user-images.githubusercontent.com/92359764/215222553-c42e1975-7aa6-4de9-a647-a39654c52bba.png)
![obraz](https://user-images.githubusercontent.com/92359764/215222567-8b1927bb-ea79-440c-bde3-c6853854c9f0.png)
