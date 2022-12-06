module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    getFortune:(req,res) => {
        const fortunes = ['A new beginning.','A lifetime of happiness.','A light heart carries you',
        'through bad stuff.','A person of words but not deeds is like a garden of weeds.']
    }

}