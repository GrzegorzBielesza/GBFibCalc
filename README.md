## Wdrażanie aplikacji full-stack w chmurze obliczeniowej Amazon AWS

## Odnośniki
* [Zmiany w aplikacji](https://github.com/GrzegorzBielesza/GBFibCalc/blob/master/README_zmiany.md)
* [Polecenia AWS Cli](https://github.com/GrzegorzBielesza/GBFibCalc/blob/master/README_aws_cli.md)

Na początku należało utworzyć repozytorium na githubie, oraz umieścić tam aplikację dostarczoną z instrukcją z poprzedniego laboratorium. Całość została wykonana przez CLI.

![obraz](https://user-images.githubusercontent.com/92359764/215206697-84d90322-498a-4db2-832f-c89fe6c8f134.png)
![obraz](https://user-images.githubusercontent.com/92359764/215206843-13da6473-9df0-4ad3-b302-6601da60ba1f.png)
![obraz](https://user-images.githubusercontent.com/92359764/215206945-18fbfdae-ecd9-4d1d-9f51-e3a2f56992c5.png)

Następnie należało utworzyć aplikację EBS

![obraz](https://user-images.githubusercontent.com/92359764/215207080-64cbcf22-6245-4747-85eb-16b46444724d.png)

Przypadkowo uciął się fragment zrzutu ekranowego. Jeśli chodzi o platformę został wykorzystany Docker tak jak w laboratorium 12.

![obraz](https://user-images.githubusercontent.com/92359764/215207254-b3f6e85b-fcd3-4e39-934d-2e36029880dc.png)

Następnie należało wykorzystać RDS do konfiguracji bazy danych Postgres

![obraz](https://user-images.githubusercontent.com/92359764/215207390-8e47c34d-efd0-490a-bc40-769ed1c09775.png)
![obraz](https://user-images.githubusercontent.com/92359764/215207430-b8cc306e-bb5b-4ee3-a971-028a368f865c.png)
![obraz](https://user-images.githubusercontent.com/92359764/215207457-33cd26fa-1d69-454e-a724-64f51464d091.png)
![obraz](https://user-images.githubusercontent.com/92359764/215207485-bceee6c8-038b-4b4a-82a2-b16d31ad6686.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208047-6aab6d6f-0594-41dc-8d99-3d1fbb05b26f.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208166-2e191810-98c1-4428-9aa6-3977b606cb69.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208179-43e13f07-b866-4826-8a42-a1d5f92a0fce.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208200-42099da5-1e23-46f5-b79f-1f0947ff4889.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208772-d97c3447-6098-4609-8d91-c629ca1d0377.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208799-52bd66d2-8910-47f2-81d6-0e29928ebfa7.png)


Następnie należało wykorzystać Elastic Cache do konfiguracji bazy danych Redis.

![obraz](https://user-images.githubusercontent.com/92359764/215208396-f30cb543-29b2-4aa2-8335-9af054abe566.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208411-9020d58a-23e6-4b06-9aae-3006a5765d39.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208450-983dba3c-4ed2-48ad-b82e-81b316c0371a.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208476-3365cfc6-d5d2-46a1-8df3-bdf28c38f778.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208497-1ea1b908-bd7a-4d30-a426-c0c502acf25c.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208615-e35518e7-dc29-4acd-be01-c2d797ef32a9.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208663-6c3fda90-7319-434c-bdd4-f299c1893d2f.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208689-ffa2d410-6bbe-4a77-8077-3316c42f7dba.png)
![obraz](https://user-images.githubusercontent.com/92359764/215208731-79ed82e4-4ef5-4000-ac61-c64d5f143af8.png)

Następnie należało utworzyć security grupy w celu komunikacji pomiędzy serwisami

![obraz](https://user-images.githubusercontent.com/92359764/215208981-6e76af53-fe04-495a-b2c2-a7d4e672422c.png)
![obraz](https://user-images.githubusercontent.com/92359764/215209116-56ca5797-4040-4e94-8e3d-a790d42db143.png)
![obraz](https://user-images.githubusercontent.com/92359764/215209162-b9e608e7-83a0-4c40-8f5a-6946ce094dcf.png)

Następnie należało inbound rule, do której należało przypisać wcześniej utworzoną grupę

![obraz](https://user-images.githubusercontent.com/92359764/215209257-fc79d637-d98b-4390-9c3b-bb87e2e04b83.png)
![obraz](https://user-images.githubusercontent.com/92359764/215209329-98ce460d-0802-49bd-99a9-44ffbb3bcf7f.png)

Następnie dla każdej usługi należało przypisać security grupe.

Postgres:

![obraz](https://user-images.githubusercontent.com/92359764/215209534-a0518dcb-ef82-4557-a300-e3dadc650256.png)
![obraz](https://user-images.githubusercontent.com/92359764/215209605-776fbf34-a9d5-481d-9bac-6d6e7144cc99.png)

Redis:

![obraz](https://user-images.githubusercontent.com/92359764/215209785-4d0bc9da-92b4-4040-ba7c-bfd5b2b623aa.png)
![obraz](https://user-images.githubusercontent.com/92359764/215209819-a5069ad4-91e9-42ae-a458-ee0ab45bd763.png)
![obraz](https://user-images.githubusercontent.com/92359764/215209842-19d9f458-f3e8-4624-a13a-535312a9f227.png)

EBS:

![obraz](https://user-images.githubusercontent.com/92359764/215210002-28f6d9bc-e78b-4f98-a1fe-be3040e23464.png)
![obraz](https://user-images.githubusercontent.com/92359764/215210115-23570119-1f97-42fa-9426-b464fd68c33b.png)

Następnie należało dodać zmienne środowiskowe odpowiedzialne za parametry dostępu do baz danych

![obraz](https://user-images.githubusercontent.com/92359764/215210315-da187a83-333f-433d-b103-5fd9c7687778.png)
![obraz](https://user-images.githubusercontent.com/92359764/215210443-a16a3b75-ae6b-489d-8530-5573dbd3e622.png)

Następnie należało dodać konfugirację workflow ze zmienionymi parametrami na potrzeby aplikacji

![obraz](https://user-images.githubusercontent.com/92359764/215211324-4c0d348f-9a9b-4f81-b5bb-bb9f91c2a608.png)
![obraz](https://user-images.githubusercontent.com/92359764/215211266-bd56c28f-325e-4bf0-992b-8512050457ed.png)

Należało również zmienić nazwę jednego z komponentów w pliku docker compose na poprawny

![obraz](https://user-images.githubusercontent.com/92359764/215216572-a144ef61-769e-4b1d-bf4d-26ca42e6cb0c.png)

Workflow został skonfigurowany tak, aby deploy następywał po aktualizacji aplikacji na branchu main.

![obraz](https://user-images.githubusercontent.com/92359764/215211894-754a1f5b-8ba8-47b5-a947-733babcc6842.png)
![obraz](https://user-images.githubusercontent.com/92359764/215211924-20c373c2-7e74-4cec-bdb2-17fb7fdb50bc.png)

Potwierdzenie poprawności wdrożenia:

![obraz](https://user-images.githubusercontent.com/92359764/215212176-b9cb061b-8ad8-4d3d-bb02-80e309d957ce.png)

W celu zaprezentowania efektu użycia polecenia 'aws elasticbeanstalk describe-environments --environment-names \
Gbmultifib-env --output json' należało utworzyć usera z odpowiednimi uprawnieniami

![obraz](https://user-images.githubusercontent.com/92359764/215215819-2e81779f-004f-4f2e-9099-6d658522e3e7.png)
![obraz](https://user-images.githubusercontent.com/92359764/215215843-c2f05b3c-d402-42bb-94f4-a271cbe6dd2e.png)
![obraz](https://user-images.githubusercontent.com/92359764/215215861-3c5b78b1-656c-4a54-9924-7e87f5349c44.png)
![obraz](https://user-images.githubusercontent.com/92359764/215215878-25f4adc1-5f4a-4665-add0-b0740a605eae.png)

A oto efekt użycia polecenia:

![obraz](https://user-images.githubusercontent.com/92359764/215215963-925c0641-b034-4c2b-b9c4-2af39de1bb79.png)
