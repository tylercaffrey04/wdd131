const character = {
    name: "Snortleblat",
    class: "Mage",
    level: 1,
    health: 100,
    image: "snortleblat.webp",

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health < 0) this.health = 0; 
        }
        
        this.updateUI();

        if (this.health === 0) {
            document.getElementById("statusMessage").innerText = `${this.name} has died!`;
        }
    },

    levelUp: function() {
        if (this.health > 0) {
            this.level += 1;
            this.updateUI();
        } else {
            document.getElementById("statusMessage").innerText = "Cannot level up a fallen hero.";
        }
    },

    updateUI: function() {
        document.getElementsByClassName("name").innerText = this.name;
        document.getElementsByClassName("class").innerText = this.class;
        document.getElementById("level").innerText = this.level;
        document.getElementById("health").innerText = this.health;
        document.getElementsByClassName("image").src = this.image;
        
    }
};

character.updateUI();

document.getElementById("attackBtn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
    character.levelUp();
});