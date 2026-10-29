window.additionalActivities = (() => {
  const units = {
    1: {
      facts: [
        ["The researchers ___ detailed evidence before drawing a conclusion.", "obtain"],
        ["Students ___ to identify the meaning of an unfamiliar word from context.", "attempt"],
        ["Writers ___ precise academic verbs in formal reports.", "employ"],
        ["Businesses develop marketing ___ to reach their customers.", "strategies"],
        ["Clear evidence makes an academic claim more ___.", "precise"]
      ],
      sequences: [
        ["Read the complete sentence.", "Identify the meaning the writer intends.", "Select a precise word that fits the context."],
        ["Locate an informal expression.", "Choose a suitable formal alternative.", "Check that the revised sentence keeps its original meaning."],
        ["Identify a contraction in a draft.", "Write the two-word formal equivalent.", "Review the sentence for grammatical accuracy."],
        ["Read both uses of a familiar word.", "Compare the surrounding contexts.", "Explain which meaning applies in each sentence."],
        ["State the academic claim.", "Support the claim with relevant evidence.", "Explain how the evidence supports the claim."]
      ]
    },
    2: {
      facts: [
        ["A student working toward a first degree is an ___.", "undergraduate"],
        ["A university is often organized into a ___.", "faculty"],
        ["A student may earn a university ___ after completing a programme.", "degree"],
        ["Economics is an academic ___ studied at university.", "discipline"],
        ["The grounds and buildings of a university form its ___.", "campus"]
      ],
      sequences: [
        ["A student chooses a university.", "The student enrols in a course.", "The course leads to an academic qualification."],
        ["A university contains faculties.", "A faculty contains departments.", "A department teaches one or more disciplines."],
        ["State the student's degree stage.", "Name the course or discipline.", "Identify the university or faculty."],
        ["A student begins a first-degree programme.", "The student studies the required courses.", "The student completes the degree."],
        ["Identify the institution.", "Identify its organizational unit.", "Identify the student's field of study."]
      ]
    },
    3: {
      facts: [
        ["A person who uses a good or service is a ___.", "consumer"],
        ["A person or organization that buys a product is a ___.", "customer"],
        ["A business may sell goods or provide a ___.", "service"],
        ["A professional-services business is often called a ___.", "firm"],
        ["A business considers its ___ when choosing where to operate.", "location"]
      ],
      sequences: [
        ["Identify a target customer group.", "Determine what the group needs.", "Offer a suitable product or service."],
        ["Compare the costs of two possible sites.", "Assess how easily customers can reach each site.", "Recommend the more suitable location."],
        ["Identify who purchases the product.", "Identify who uses the product.", "Classify each person as customer or consumer."],
        ["A firm designs a service.", "The firm guarantees an appropriate standard of service.", "The customer evaluates the experience."],
        ["Describe the business and its industry.", "Explain its product or service.", "Identify its customers and consumers."]
      ]
    },
    4: {
      facts: [
        ["Money received by a person or business is ___.", "income"],
        ["Putting funds into an asset or activity for future benefit is an ___.", "investment"],
        ["A person who receives money and agrees to repay it is a ___.", "borrower"],
        ["A person or institution that provides a loan is a ___.", "lender"],
        ["A business that earns more than it spends is ___.", "profitable"]
      ],
      sequences: [
        ["Record the business's revenue.", "Subtract its costs.", "Describe the result as a profit or loss."],
        ["A borrower requests funds.", "A lender assesses the request and its risks.", "Both parties agree on repayment terms."],
        ["Identify the financial decision.", "Compare the expected costs and income.", "Explain the likely economic result."],
        ["A firm obtains finance.", "The firm invests in an asset or activity.", "The investment may generate future income."],
        ["Define the economic term.", "Use the correct word form in a sentence.", "Check that the sentence fits the business context."]
      ]
    },
    5: {
      facts: [
        ["The condition in which wants exceed available resources is ___.", "scarcity"],
        ["The next-best alternative given up when choosing is the ___ ___.", "opportunity cost"],
        ["The human effort used to produce goods and services is ___.", "labour"],
        ["Equipment and buildings used to produce other goods are forms of ___.", "capital"],
        ["The factor of production that organizes a business and accepts risk is ___.", "entrepreneurship"]
      ],
      sequences: [
        ["Resources are limited.", "People must choose between alternatives.", "The next-best alternative becomes the opportunity cost."],
        ["Identify the scarce resource.", "List the available alternatives.", "State the next-best alternative that will be given up."],
        ["Identify the land and natural resources.", "Identify the labour and capital required.", "Explain the entrepreneur's role in organizing production."],
        ["Define the economic problem.", "Distinguish a household-level question from an economy-wide question.", "Classify the question as microeconomics or macroeconomics."],
        ["A town identifies a public need.", "It compares projects that compete for limited funds.", "It selects one project and recognizes its opportunity cost."]
      ]
    },
    6: {
      facts: [
        ["Money is commonly accepted as a medium of ___.", "exchange"],
        ["A function of money that makes buying and selling easier is its ___ of exchange.", "medium"],
        ["Money can preserve purchasing power as a ___ of value.", "store"],
        ["Money provides a common ___ of value for comparing prices.", "measure"],
        ["Money that is not backed by a physical commodity is often called ___ money.", "fiat"]
      ],
      sequences: [
        ["Barter requires each person to want what the other offers.", "Money provides a commonly accepted means of payment.", "Buyers and sellers can complete an exchange more easily."],
        ["A buyer and seller agree on a price.", "The buyer pays with accepted money.", "The seller provides the good or service."],
        ["Choose a unit for stating prices.", "Accept it in exchange for goods or services.", "Retain it for future purchases."],
        ["Identify a problem with direct barter.", "Explain how money functions as a medium of exchange.", "Show how the exchange can then take place."],
        ["State the payment in a sentence.", "Use the simple present passive correctly.", "Check that the sentence identifies what is accepted or measured."]
      ]
    },
    7: {
      facts: [
        ["The quantity of a good that consumers are willing to buy is its ___.", "demand"],
        ["The quantity of a good that sellers are willing to offer is its ___.", "supply"],
        ["The price at which quantity demanded equals quantity supplied is the ___ price.", "equilibrium"],
        ["A movement along a demand curve changes quantity ___.", "demanded"],
        ["A change in a non-price determinant can ___ a market curve.", "shift"]
      ],
      sequences: [
        ["A good's own price changes.", "Buyers move along the existing demand curve.", "The quantity demanded changes."],
        ["A non-price determinant of demand changes.", "The demand curve shifts.", "The new market equilibrium may have a different price and quantity."],
        ["A production cost changes.", "Sellers adjust the quantity they are willing to offer.", "The supply curve may shift."],
        ["Identify whether an event affects buyers or sellers.", "Determine which curve is affected.", "Predict the likely effect on equilibrium."],
        ["Describe the initial market equilibrium.", "Explain the demand or supply shock.", "Compare the new equilibrium with the initial one."]
      ]
    },
    8: {
      facts: [
        ["GDP counts the value of ___ goods and services produced in a country.", "final"],
        ["GDP measured using current prices is ___ GDP.", "nominal"],
        ["GDP adjusted for price changes is ___ GDP.", "real"],
        ["GDP divided by population gives GDP per ___.", "capita"],
        ["A significant decline in economic activity is a ___.", "recession"]
      ],
      sequences: [
        ["Identify the quantities of final goods and services.", "Multiply each quantity by its price.", "Add the values to calculate total output."],
        ["Find the country's GDP.", "Find its population.", "Divide GDP by population to calculate GDP per capita."],
        ["Identify a nominal GDP figure.", "Adjust it for price changes.", "Interpret the resulting real GDP figure."],
        ["Compare economic activity over time.", "Identify a significant decline in activity.", "Describe the decline as a recession."],
        ["State what GDP measures.", "Identify an aspect of well-being it does not measure directly.", "Explain why GDP is not a complete measure of welfare."]
      ]
    },
    9: {
      facts: [
        ["The most senior managers set the organization's overall ___.", "direction"],
        ["___ managers translate strategic plans into operational action.", "middle"],
        ["___-line managers supervise employees' everyday work.", "front"],
        ["Senior management communicates strategic ___ throughout the organization.", "goals"],
        ["Management helps to ___ people and resources toward shared objectives.", "coordinate"]
      ],
      sequences: [
        ["Senior management sets the organization's direction.", "Middle management communicates plans and coordinates departments.", "Front-line management supervises everyday work."],
        ["A manager identifies an organizational objective.", "The manager assigns responsibilities and resources.", "The manager reviews performance against the objective."],
        ["Front-line staff report a recurring problem.", "Middle management coordinates a response.", "Senior management considers a wider policy or resource change."],
        ["State the management responsibility.", "Choose a suitable modal verb.", "Use the modal with the base form of the verb."],
        ["Senior management develops a strategic goal.", "Middle managers communicate the goal.", "Front-line managers guide staff in carrying it out."]
      ]
    },
    10: {
      facts: [
        ["Planning begins by setting clear ___.", "objectives"],
        ["The management function concerned with selecting and retaining staff is ___.", "staffing"],
        ["A ___ management style involves employees in decision-making.", "democratic"],
        ["A ___-faire manager gives a capable team considerable independence.", "laissez"],
        ["Managers use ___ to compare actual performance with planned results.", "control"]
      ],
      sequences: [
        ["Set clear objectives.", "Choose actions and assign responsibilities.", "Implement the plan and review progress."],
        ["Determine what roles need to be filled.", "Recruit and support suitable employees.", "Review staffing needs as the plan develops."],
        ["Invite employees to contribute ideas.", "Compare the available options.", "Agree on a decision and its responsibilities."],
        ["Identify the experience and skills of the team.", "Choose an appropriate management style.", "Adjust the manager's level of direction to the task."],
        ["Set a performance standard.", "Measure actual performance.", "Compare results and take corrective action if needed."]
      ]
    },
    11: {
      facts: [
        ["The people who perform an organization's basic work are its ___.", "operators"],
        ["___ are specialists who standardize processes, outputs, or skills.", "analysts"],
        ["Managers provide direct ___ when they instruct staff and oversee work.", "supervision"],
        ["An organization uses coordination to align work toward shared ___.", "objectives"],
        ["___ staff provide services that support the organization's operations.", "support"]
      ],
      sequences: [
        ["Operators carry out the basic work.", "Managers provide direct supervision as the organization grows.", "Analysts may standardize processes, outputs, or skills."],
        ["Identify the organization's operating core.", "Identify the managers who coordinate its work.", "Identify analysts and support staff."],
        ["Describe what a role does.", "Connect the role to one part of the organization.", "Explain how it contributes to coordination."],
        ["Assign related tasks to roles.", "Coordinate the roles across the organization.", "Review whether the structure supports the work."],
        ["Name the organizational part.", "Describe the people or responsibilities it contains.", "Explain how that part supports the organization."]
      ]
    },
    12: {
      facts: [
        ["The principles that members of an organization consider important are its shared ___.", "values"],
        ["Unspoken beliefs that guide decisions are cultural ___.", "assumptions"],
        ["Culture ___ describes how widely and strongly members share cultural beliefs.", "strength"],
        ["Repeated actions in an organization form recognizable behaviour ___.", "patterns"],
        ["Employees who take responsibility for improving their work demonstrate ___.", "initiative"]
      ],
      sequences: [
        ["An organization communicates its values.", "Shared assumptions influence everyday decisions.", "Repeated decisions create recognizable behaviour patterns."],
        ["Compare the organization's stated values with daily practice.", "Collect evidence from routines and decisions.", "Recommend a change that aligns practice with the values."],
        ["Identify a change that began in the past.", "Describe its present relevance with the present perfect.", "Use the past perfect for an earlier completed event."],
        ["Observe a repeated workplace behaviour.", "Consider the assumption that may explain it.", "Assess whether the behaviour supports the stated culture."],
        ["Define the cultural value.", "Find evidence of how employees enact it.", "Evaluate how consistently it is shared."]
      ]
    },
    13: {
      facts: [
        ["Commercial banks accept customer ___ and use funds in lending.", "deposits"],
        ["An asset pledged to secure a loan is ___.", "collateral"],
        ["A bank's ability to meet its short-term obligations is its ___.", "liquidity"],
        ["A borrower's ability to meet financial obligations is its ___.", "solvency"],
        ["A borrower's reliability in repaying credit is its ___.", "creditworthiness"]
      ],
      sequences: [
        ["A borrower submits a loan application.", "The bank assesses income, creditworthiness, and collateral.", "The bank agrees terms and transfers funds if approved."],
        ["Review the borrower's expected income.", "Assess solvency and available security.", "Consider the loan's risks and the bank's liquidity."],
        ["Explain what collateral secures.", "Identify what collateral does not guarantee.", "Describe the remaining risk the bank must assess."],
        ["A commercial bank accepts deposits.", "The bank lends funds to suitable borrowers.", "Borrowers repay under the agreed terms."],
        ["Identify the bank service needed.", "Distinguish commercial banking from investment banking.", "Justify which service fits the business's request."]
      ]
    },
    14: {
      facts: [
        ["A group of consumers with shared characteristics is a market ___.", "segment"],
        ["The consumers a company chooses to serve form its ___ market.", "target"],
        ["The good or service offered to customers is the ___.", "product"],
        ["Communication used to inform and persuade customers is ___.", "promotion"],
        ["The systematic collection of information about customers is market ___.", "research"]
      ],
      sequences: [
        ["Research customer needs.", "Choose a target market.", "Design an offer that creates value for that market."],
        ["Define a customer segment.", "Select the target segment.", "Adapt the marketing mix to its needs."],
        ["Choose a product and suitable price.", "Decide where customers can obtain it.", "Plan promotion that reaches the target market."],
        ["State a question about consumer needs.", "Choose a method to collect market information.", "Use the findings to refine the offer."],
        ["Describe the target customer.", "Choose the relevant marketing-mix decisions.", "Explain how the choices meet the customer's needs."]
      ]
    }
  };

  return Object.fromEntries(Object.entries(units).map(([unit, content]) => {
    const answers = content.facts.map(([, answer]) => answer);
    const fill = content.facts.map(([sentence, answer], index) => ({
      prompt: `Complete the Unit ${unit} sentence ${index + 1}.`,
      sentence,
      answer
    }));
    const mcq = content.facts.map(([sentence, answer], index) => {
      const distractors = answers.filter(option => option !== answer).slice(0, 2);
      const correctIndex = index % 3;
      const options = [...distractors];
      options.splice(correctIndex, 0, answer);
      return {
        prompt: `Choose the term that correctly completes: “${sentence}”`,
        options,
        answer: correctIndex
      };
    });
    const order = content.sequences.map((answer, index) => ({
      prompt: `Arrange these Unit ${unit} stages in a logical order (${index + 1}).`,
      items: [...answer].reverse(),
      answer
    }));
    return [unit, {fill, mcq, order}];
  }));
})();
