// // **** ****
// getAgent(7, agent => {
//   console.log("<<< agent: ", agent);
//   if (agent.licenseToKill) {
//     getTopWeapons(weapons => {
//       console.log("<<< top weapons: ", weapons);
//       sendEmail(agent.email, weapons, () => {
//         console.log("<<< email sent!");
//       });
//     });
//   }
// });

// **** ****
const delay = 4000;

/*
 * Approach using async and await.
 * Wrapper async to use await.
 */
async function notifyAgent(agentID) {
  // **** ****
  console.log("notifyAgent <<< getting agent...");
  const agent = await getAgent(agentId);
  console.log("notifyAgent <<< agent: ", agent);

  // **** must have license to kill ****
  if (agent.licenseToKill) {
    // **** ****
    console.log("notifyAgent <<< getting top weapons...");
    const weapons = await getTopWeapons();
    console.log("notifyAgent <<< top weapons: ", weapons);

    // **** ****
    console.log("notifyAgent <<< sending email...");
    await sendEmail(agent.email, weapons);
    console.log("notifyAgent <<< mail sent!");
  }
}

// **** notify agent ****
const agentId = 7;
notifyAgent(agentId);

/*
 *
 */
function getAgent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "James Bond",
        licenseToKill: true,
        email: "james.bond@mi6.gov"
      });
    }, delay);
  });
}

/*
 *
 */
function getTopWeapons() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Walther PPK", "Beretta 418", "Winchester .308 target rifle"]);
    }, delay);
  });
}

/*
 *
 */
function sendEmail(email, weapons) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
