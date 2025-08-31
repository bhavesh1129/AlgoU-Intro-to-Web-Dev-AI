async function askGemini(prompt) {
    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyAoau9kyF_R-aYof5N7aLm-YiKcIiAJTVo",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ]
            })
        }
    );
    const data = await response.json();
    console.log(data.candidates?.[0].content?.parts?.[0]?.text);
}

// Call the function
askGemini("What is the capital of India?");
