var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];

  for(let {name,organization,birth_year}of mascots){
    console.log(`Name Is ${name}
     Designation ${organization}
    Year Of Birth ${birth_year}`);
  }