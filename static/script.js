const reviewForm = document.querySelector('#review-form');

const bodyy = document.querySelector('body')

const likeForm = `            <div class="container min-vh-100 justify-content-center align-items-center">
                <form method="post" action="/">
                    {%csrf_token%}
        
                    <div class="form-group mb-3">
                        <label for="nmae">Name</label>
                        <input type="text" class="form-control" id="name" name='name' placeholder="First Name">
                    </div>
        
                    <div class="form-group mb-3">
                        <label for="lname">Class and section</label>
                        <input type="text" class="form-control" id="class-and-section" name='class-and-section' placeholder="Class and section">
                    </div>
        
                    <div class="mb-3">
                        <label for="recommendations" class="form-label">Some recommendations</label>
                        <textarea class="form-control" id="recommendations" name='recommendations' rows="3">I like the article but it could be better.</textarea>
                      </div>
        
                    <div class="form-group text-center mb-3" style="margin-top: 5px;">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>`;

const dislikeForm = `            <div class="container min-vh-100 justify-content-center align-items-center">
                <form method="post" action="/">
                    {%csrf_token%}
        
                    <div class="form-group mb-3">
                        <label for="nmae">Name</label>
                        <input type="text" class="form-control" id="name" name='name' placeholder="First Name">
                    </div>
        
                    <div class="form-group mb-3">
                        <label for="lname">Class and section</label>
                        <input type="text" class="form-control" id="class-and-section" name='class-and-section' placeholder="Class and section">
                    </div>
        
                    <div class="mb-3">
                        <label for="recommendations" class="form-label">Some recommendations</label>
                        <textarea class="form-control" id="recommendations" name='recommendations' rows="3">I didn't find the form really helpful but it could be better.</textarea>
                      </div>
        
                    <div class="form-group text-center mb-3" style="margin-top: 5px;">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>`;

const wia = `    <h1 style="text-align: center;"><b>What is AI?</b></h1>
    <div class='container'>
    <p>
        Artificial intelligence (AI) is a broad field of computer science that deals with the creation of intelligent agents, which are systems that can reason, learn, and act autonomously. In simpler terms, it's the ability of a machine to mimic intelligent human behavior. <br>
        
        There are many different types of AI, but some of the most common include: <br>
        
        Machine learning: This type of AI allows machines to learn from data without being explicitly programmed. For example, a machine learning algorithm could be used to train a computer to recognize faces in images.
        Deep learning: This is a type of machine learning that uses artificial neural networks to learn from data. Deep learning has been used to achieve state-of-the-art results in a variety of tasks, such as image recognition, speech recognition, and natural language processing.
        Natural language processing: This type of AI allows machines to understand and generate human language. For example, a natural language processing algorithm could be used to build a chatbot that can answer your questions.
        AI is being used in a wide variety of applications, including: <br>
        
        Healthcare: AI is being used to develop new drugs, diagnose diseases, and provide personalized medical care.
        Finance: AI is being used to detect fraud, predict market trends, and make investment decisions.
        Transportation: AI is being used to develop self-driving cars, optimize traffic flow, and improve safety.
        Manufacturing: AI is being used to improve efficiency, reduce waste, and predict equipment failure.
        The potential of AI is vast, and it is likely to continue to have a profound impact on our lives in the years to come. <br>
        
        Here are some additional resources that you may find helpful: <br>
        
        The Turing Test: This is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.
        The Chinese Room: This is a thought experiment that argues that a machine that can pass the Turing test may not be truly intelligent.
        The Singularity: This is a hypothetical point in the future when AI will have surpassed human intelligence and will be able to improve itself at an exponential rate.
        </p>
        </div>`;

evOfAI = `<h1 style="text-align: center;"><b>Evolution of AI over the years.</b></h1>
        <div class='container'>
    <p>
        You might think AI is a recent technology developed in the 2000s, but that's not entirely true. AI has a much longer journey, starting in the 1950s and evolving steadily ever since. The early pioneers who first developed AI were Alan Turing and Marvin Minsky. <br>

        The evolution of AI has been a fascinating journey, marked by both significant leaps and periods of stagnation. Here's a brief overview: <br>
        
        Early Days (1950s-1970s): The Seeds of Intelligence <br>
        
        1950s: Pioneers like Alan Turing and Marvin Minsky laid the foundation with ideas like the Turing Test and the first AI programs. <br>
        1960s: Rule-based systems and expert systems gained traction, focusing on mimicking human reasoning and decision-making. <br>
        1970s: The "AI winter" arrived due to limitations of the time and overpromised capabilities. <br>
        The Rise of Machine Learning (1980s-2000s): Learning from Data <br>
        
        1980s: Connectionism and neural networks gained popularity, laying the groundwork for modern deep learning. <br>
        1990s: Machine learning algorithms like decision trees and Support Vector Machines (SVMs) emerged, enabling AI to learn from data. <br>
        2000s: The rise of cloud computing and Big Data fueled the development of more powerful and data-hungry AI models. <br>
        The Age of Deep Learning (2010s-present): Breakthroughs and Ubiquity <br>
        
        2010s: Deep learning revolutionized the field with its ability to learn complex patterns from massive datasets. <br>
        2020s: AI applications are now ubiquitous, impacting healthcare, finance, transportation, and countless other fields. <br>
        Present and Future: Focus on ethical considerations, explainability of AI models, and addressing potential biases. <br>
        Here are some key takeaways of AI's evolution: <br>
        
        Shift from rule-based to data-driven: AI has moved from relying on human-programmed rules to learning from data and adapting autonomously. <br>
        Increased complexity and capabilities: Modern AI models can handle tasks like image and speech recognition, natural language processing, and even creative endeavors with remarkable accuracy. <br>
        Widening applications and impact: AI is no longer confined to research labs; it's transforming various industries and our daily lives in profound ways. <br>
        The evolution of AI is ongoing, and it's exciting to imagine what the future holds. However, it's crucial to consider ethical concerns and responsible development to ensure AI benefits everyone.<br>
        </p>
        </div>`;

article3 = `<h1 style="text-align: center;"><b>How AI can help in our daily life?</b></h1>
        <div class='container'>
    <p>
        AI is already woven into the fabric of our daily lives, often in ways we don't even realize! Here are just a few examples of how AI can be your helpful companion: <br>

        1. Streamlining your mornings: <br>
        
        Smart alarms and sleep trackers: Analyze your sleep patterns and wake you up at the optimal time for a refreshed start. <br>
        AI-powered weather forecasts: Get hyper-local weather updates and plan your day accordingly. <br>
        2. Conquering the kitchen: <br>
        
        Personalized recipe recommendations: AI can suggest dishes based on your dietary preferences, allergies, and ingredients you have on hand. <br>
        Smart kitchen appliances: Adjust cooking times and temperatures, monitor your food remotely, and even preheat your oven before you arrive home. <br>
        3. Boosting your productivity: <br>
        
        Smart calendars and to-do lists: Prioritize tasks, schedule appointments, and even remind you of deadlines you might have forgotten. <br>
        AI-powered email assistants: Filter out spam, schedule emails to be sent later, and even generate draft responses for repetitive messages. <br>
        4. Entertainment that knows you: <br>
        
        Streaming services that recommend movies and shows you'll love. No more endless scrolling through endless options! <br>
        Personalized music playlists that adapt to your mood and activity. <br> 
        5. Staying healthy and informed: <br>
        
        AI-powered fitness trackers and health apps: Monitor your activity levels, sleep patterns, and overall health, providing insights and personalized recommendations. <br> 
        News aggregators that curate articles based on your interests. Stay informed without getting overwhelmed by information overload. <br>
        These are just a few examples, and the possibilities are constantly expanding! As AI technology continues to evolve, we can expect even more ways it can enhance and simplify our daily lives. <br>
        
        So, the next time you reach for your phone or interact with a smart device, remember the invisible hand of AI working behind the scenes, making your life just a little bit smoother.<br>
        </p>
        </div>`;

dangerOfAI = `
        <h1 style="text-align: center;"><b>Is AI going to take over humanity?</b></h1>
        <div class='container'>
    <p>
        Whether AI will "take over" the human world is a complex question with no easy answer. There's a spectrum of potential outcomes, ranging from harmonious co-existence to dystopian scenarios, and the future depends on the choices we make today. Here are some key points to consider: <br>

Potential benefits of AI: <br>

Enhanced capabilities: AI can handle tasks beyond human capacity, like complex calculations, disease diagnosis, and even creative endeavors. <br>
Improved efficiency: AI can automate repetitive tasks, freeing up human time for more creative and strategic work. <br>
Better decision-making: AI can analyze vast amounts of data to provide insights that humans might miss, leading to better informed decisions. <br>
Potential risks of AI: <br>

Job displacement: AI automation could replace some jobs, leading to unemployment and economic inequality. <br>
Bias and discrimination: AI algorithms can perpetuate existing biases in society, leading to unfair outcomes for certain groups. <br>
Loss of control: If AI surpasses human intelligence, it could become difficult to control or predict its actions. <br>
The role of humans in shaping the future of AI: <br>

Developing ethical guidelines: We need to establish clear ethical principles for AI development and deployment to ensure it benefits everyone. <br>
Upskilling and reskilling the workforce: We need to prepare people for the changing job landscape by investing in education and training programs. <br>
Transparency and accountability: We need to ensure AI systems are transparent and accountable, so we understand how they make decisions. <br>
Ultimately, the future of AI is not preordained. By focusing on responsible development, ethical considerations, and human-centered design, we can ensure AI becomes a force for good, empowering us rather than replacing us. <br>

It's important to remember that AI is a tool, and like any tool, it can be used for good or bad. The choices we make today will determine how AI shapes our future, so it's important to have open and informed discussions about its potential and its pitfalls. <br>

        </p></div>`

function popForm() {
    reviewForm.innerHTML += likeForm;
}

function poppForm() {
    reviewForm.innerHTML += dislikeForm;
}

function whatIsAI() {
    bodyy.innerHTML = wia;
}

function evolutionOfAI() {
    bodyy.innerHTML = evOfAI;
}

function aiInOurDailyLives() {
    bodyy.innerHTML = article3;
}

function isAIGoingToTakeOver() {
    bodyy.innerHTML = dangerOfAI;
}