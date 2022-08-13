﻿



CREATE TABLE "Support"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Description" NVARCHAR2(255) NULL,

	"link" NVARCHAR2(255) NULL,

	"Form_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ListComponent"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Component_m0" RAW(16) NOT NULL,

	"Support_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ListSize"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Size_m0" RAW(16) NOT NULL,

	"Support_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Subindustry"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Size"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ListInv"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Investment_m0" RAW(16) NOT NULL,

	"Support_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Component"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ListIndustry"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Subindustry_m0" RAW(16) NOT NULL,

	"Support_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Investment"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Form"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Support"
	ADD CONSTRAINT "Support_FForm_0" FOREIGN KEY ("Form_m0") REFERENCES "Form" ("primaryKey");

CREATE INDEX "Support_IForm_m0" on "Support" ("Form_m0");

ALTER TABLE "ListComponent"
	ADD CONSTRAINT "ListComponent_FComponent_0" FOREIGN KEY ("Component_m0") REFERENCES "Component" ("primaryKey");

CREATE INDEX "ListComponent_IComponent_m0" on "ListComponent" ("Component_m0");

ALTER TABLE "ListComponent"
	ADD CONSTRAINT "ListComponent_FSupport_0" FOREIGN KEY ("Support_m0") REFERENCES "Support" ("primaryKey");

CREATE INDEX "ListComponent_ISupport_m0" on "ListComponent" ("Support_m0");

ALTER TABLE "ListSize"
	ADD CONSTRAINT "ListSize_FSize_0" FOREIGN KEY ("Size_m0") REFERENCES "Size" ("primaryKey");

CREATE INDEX "ListSize_ISize_m0" on "ListSize" ("Size_m0");

ALTER TABLE "ListSize"
	ADD CONSTRAINT "ListSize_FSupport_0" FOREIGN KEY ("Support_m0") REFERENCES "Support" ("primaryKey");

CREATE INDEX "ListSize_ISupport_m0" on "ListSize" ("Support_m0");

ALTER TABLE "ListInv"
	ADD CONSTRAINT "ListInv_FInvestment_0" FOREIGN KEY ("Investment_m0") REFERENCES "Investment" ("primaryKey");

CREATE INDEX "ListInv_IInvestment_m0" on "ListInv" ("Investment_m0");

ALTER TABLE "ListInv"
	ADD CONSTRAINT "ListInv_FSupport_0" FOREIGN KEY ("Support_m0") REFERENCES "Support" ("primaryKey");

CREATE INDEX "ListInv_ISupport_m0" on "ListInv" ("Support_m0");

ALTER TABLE "ListIndustry"
	ADD CONSTRAINT "ListIndustry_FSubindustry_0" FOREIGN KEY ("Subindustry_m0") REFERENCES "Subindustry" ("primaryKey");

CREATE INDEX "ListIndustry_ISubindustry_m0" on "ListIndustry" ("Subindustry_m0");

ALTER TABLE "ListIndustry"
	ADD CONSTRAINT "ListIndustry_FSupport_0" FOREIGN KEY ("Support_m0") REFERENCES "Support" ("primaryKey");

CREATE INDEX "ListIndustry_ISupport_m0" on "ListIndustry" ("Support_m0");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


