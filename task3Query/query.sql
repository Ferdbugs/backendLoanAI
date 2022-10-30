select b.name as "Broker Name",count(c.ID) as "Number of Customers" from broker as b, customer as c 
where b.ID=c.BROKER_ID 
Group By b.ID Order By count(c.ID) ASC, b.name ASC;