const settings = {
    animate: true
}

const degToRad = (degrees) => {
    return degrees/180 * Math.PI;
}

const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

const mapRange = (value, inputMin, inputMax, outputMin, outputMax) => {
    const p = value / (inputMax - inputMin);
    return (outputMax - outputMin) * p + outputMin;
}


const sketch = ({context, width, height}) => {
    let agents = [];
    for (let i = 0; i < 40; i++) {
        const x = randomRange(0, width);
        const y = randomRange(0, height);
        agents.push(new Agent(x, y));
    }

    return ({context, width, height}) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);

        for (let i = 0; i < agents.length; i++) {
            const agent = agents[i];
            for (let j = i + 1; j < agents.length; j++) {
                const other = agents[j];
                const dist = agent.pos.getDistance(other.pos);
                if (dist > 200) {
                    continue;
                }

                context.lineWidth = mapRange(dist, 0, 200, 13, 1);

                context.strokeStyle = "#36454F";
                context.fillStyle = "#00FFFF";
                context.beginPath();
                context.moveTo(agent.pos.x, agent.pos.y);
                context.lineTo(other.pos.x, other.pos.y);
                context.stroke();
            }
        }

        for (let agent of agents) {
            agent.update();
            agent.draw(context);
            agent.bounce(width, height);
        }
    }
}

canvasSketch(sketch, settings);

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx**2 + dy**2);
    }
}

class Agent {
    constructor(x, y) {
        this.pos =  new Vector(x, y);
        this.velocity = new Vector(randomRange(-1, 1), randomRange(-1, 1));
        this.radius = randomRange(4, 12);
    }

    bounce(width, height) {
        if (this.pos.x <= 0 || this.pos.x >= width) {
            this.velocity.x *= -1;
        }
        if (this.pos.y <= 0 || this.pos.y >= height) {
            this.velocity.y *= -1;
        }
    }

    update() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    draw(context) {
        context.save();
        context.lineWidth = 4;
        context.translate(this.pos.x, this.pos.y);
        context.beginPath();
        context.arc(0, 0, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.restore();
    }
}