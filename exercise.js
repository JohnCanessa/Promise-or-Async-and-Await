// **** ****
const delay = 4000;

// **** callback based approach ****
getAgent(7, agent => {
  console.log("<<< agent: ", agent);

  // **** must have license to kill ****
  if (agent.licenseToKill) {
    getTopWeapons(weapons => {
      console.log("<<< top weapons: ", weapons);
      sendEmail(agent.email, weapons, () => {
        console.log("<<< email sent!");
      });
    });
  }
});

function getAgent(id, callback) {
  console.log("getAgent <<< getting agent...");
  setTimeout(() => {
    callback({
      id: 7,
      name: "James Bond",
      licenseToKill: true,
      email: "james.bond@mi6.gov"
    });
  }, delay);
}

function getTopWeapons(callback) {
  console.log("getTopWeapons <<< getting weapons...");
  setTimeout(() => {
    callback(["Walther PPK", "Beretta 418", "Winchester .308 target rifle"]);
  }, delay);
}

function sendEmail(email, movweaponsies, callback) {
  console.log("sendEmail <<< sending email...");
  setTimeout(() => {
    callback();
  }, delay);
}
