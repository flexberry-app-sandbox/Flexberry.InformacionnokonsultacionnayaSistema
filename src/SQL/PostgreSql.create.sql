﻿




CREATE TABLE Support (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Description VARCHAR(255) NULL,
 link VARCHAR(255) NULL,
 Form_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ListComponent (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Component_m0 UUID NOT NULL,
 Support_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ListSize (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Size_m0 UUID NOT NULL,
 Support_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Subindustry (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Size (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ListInv (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Investment_m0 UUID NOT NULL,
 Support_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Component (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ListIndustry (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Subindustry_m0 UUID NOT NULL,
 Support_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Investment (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Form (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Support ADD CONSTRAINT FK23c5a389e5b53e4c49704f19fe1b6ee513c64cf9 FOREIGN KEY (Form_m0) REFERENCES Form; 
CREATE INDEX Index23c5a389e5b53e4c49704f19fe1b6ee513c64cf9 on Support (Form_m0); 

 ALTER TABLE ListComponent ADD CONSTRAINT FK1ef54661f137f177721b6c9b695fd9a2a3b9cae7 FOREIGN KEY (Component_m0) REFERENCES Component; 
CREATE INDEX Index1ef54661f137f177721b6c9b695fd9a2a3b9cae7 on ListComponent (Component_m0); 

 ALTER TABLE ListComponent ADD CONSTRAINT FKa9fba3336dc334a728dc09be860b4036b6cf8b09 FOREIGN KEY (Support_m0) REFERENCES Support; 
CREATE INDEX Indexa9fba3336dc334a728dc09be860b4036b6cf8b09 on ListComponent (Support_m0); 

 ALTER TABLE ListSize ADD CONSTRAINT FK7216da26c17fdca3f6738e147a060fae094801e8 FOREIGN KEY (Size_m0) REFERENCES Size; 
CREATE INDEX Index7216da26c17fdca3f6738e147a060fae094801e8 on ListSize (Size_m0); 

 ALTER TABLE ListSize ADD CONSTRAINT FK1c557b78e74d2d711740a5ff9dfd0548f051943f FOREIGN KEY (Support_m0) REFERENCES Support; 
CREATE INDEX Index1c557b78e74d2d711740a5ff9dfd0548f051943f on ListSize (Support_m0); 

 ALTER TABLE ListInv ADD CONSTRAINT FK54f4d431153a26e229a474d50b328855e112a5e4 FOREIGN KEY (Investment_m0) REFERENCES Investment; 
CREATE INDEX Index54f4d431153a26e229a474d50b328855e112a5e4 on ListInv (Investment_m0); 

 ALTER TABLE ListInv ADD CONSTRAINT FK3dfe297a3d6448178e7afd699ced1917e5304adf FOREIGN KEY (Support_m0) REFERENCES Support; 
CREATE INDEX Index3dfe297a3d6448178e7afd699ced1917e5304adf on ListInv (Support_m0); 

 ALTER TABLE ListIndustry ADD CONSTRAINT FKd8516fbb1c3e20797f6994176d222d0464948bb4 FOREIGN KEY (Subindustry_m0) REFERENCES Subindustry; 
CREATE INDEX Indexd8516fbb1c3e20797f6994176d222d0464948bb4 on ListIndustry (Subindustry_m0); 

 ALTER TABLE ListIndustry ADD CONSTRAINT FK6c6cc253364a825eedd228b46f928077ad1130ca FOREIGN KEY (Support_m0) REFERENCES Support; 
CREATE INDEX Index6c6cc253364a825eedd228b46f928077ad1130ca on ListIndustry (Support_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 
