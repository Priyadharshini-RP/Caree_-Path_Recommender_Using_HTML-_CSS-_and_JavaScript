function recommendCareer() {
    let interest = document.getElementById("interest").value;
    let skill = document.getElementById("skill").value;
    let result = document.getElementById("result");

    if (interest === "" || skill === "") {
        result.innerHTML = "Please select both interest and skill!";
        return;
    }

    if (interest === "technology" && skill === "problem") {
        result.innerHTML = "💻 Recommended Career: Software Developer";
    }
    else if (interest === "design" && skill === "creativity") {
        result.innerHTML = "🎨 Recommended Career: Graphic Designer";
    }
    else if (interest === "business" && skill === "communication") {
        result.innerHTML = "📈 Recommended Career: Marketing Manager";
    }
    else if (interest === "health" && skill === "analysis") {
        result.innerHTML = "🩺 Recommended Career: Medical Researcher";
    }
    else {
        result.innerHTML = "🔍 Suggested Career: Explore related interdisciplinary fields!";
    }
}