CREATE TABLE IF NOT EXISTS Contract (
	id serial primary key,
	name text,
	sourceCode text,
	byteCode text,
	language text,
	compilerVersion text,
	abi text,
	address text,
	transactionHash text,
	createTimestamp timestamp with time zone,
	gasEstimates integer,
	gasUsed integer,
	status text
);

ALTER TABLE Contract
	OWNER TO root;



CREATE TABLE IF NOT EXISTS TransactionData (
	txId serial primary key,
	txHash text,
	contractFunctionId integer, -- FK: contractFunction.id
	transactionHash text,	-- which transactionHash
	data text, -- json format
	status text, -- UNCONFIRM, PENDING, CONFIRMED, FAILED
	network text, -- testnet, public, private
	txTimestamp timestamp with time zone,
	updateTimestamp timestamp with time zone,
	blockNumber bigint,
	blockHash text,
	fromAddress text,
	gasUsed integer
);

ALTER TABLE TransactionData
  OWNER TO root;



CREATE TABLE IF NOT EXISTS Account (
	id serial primary key,
	address text,
	passphrase text,	-- hash
	name text,
	email text,
	createTimestamp timestamp with time zone
);

ALTER TABLE Account
  OWNER TO root;