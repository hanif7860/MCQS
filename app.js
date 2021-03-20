function Check(){
    var score = 0 
    var right_answer_1 = document.getElementById("q1-a1")
    var q1_answer_2 = document.getElementById("q1-a2")
    var q1_answer_3 = document.getElementById("q1-a3")
    var q1_answer_4 = document.getElementById("q1-a4")
    
    if(right_answer_1.checked == true) {
    score++
        alert('Question (1) Is Correct')
    }
    else{
        alert('Question (1) Is InCorrect')
    }
     var right_answer_2 = document.getElementById("q2-a2")
     var q2_answer_2 = document.getElementById("q2-a1")
     var q2_answer_3 = document.getElementById("q2-a3")
     var q2_answer_4= document.getElementById("q2-a4")

     if(right_answer_2.checked == true) {
        score++
            alert('Question (2) Is Correct')
        }
        else{
            alert('Question (2) Is InCorrect')
        }

        var right_answer_3 = document.getElementById("q3-a4")
        var q3_answer_2 = document.getElementById("q3-a1")
        var q3_answer_3 = document.getElementById("q3-a2")
        var q3_answer_4 = document.getElementById("q3-a3")
        if(right_answer_3.checked == true) {
            score++
                alert('Question (3) Is Correct')
            }
            else{
                alert('Question (3) Is InCorrect')
            }

        var right_answer_4 = document.getElementById("q4-a2")
        var q4_answer_2 = document.getElementById("q4-a1")
        var q4_answer_3 = document.getElementById("q4-a3")
        var q4_answer_4 = document.getElementById("q4-a4")
        if(right_answer_4.checked == true) {
            score++
                alert('Question (4) Is Correct')
            }
            else{
                alert('Question (4) Is InCorrect')
            }

            
        var right_answer_5 = document.getElementById("q5-a2")
        var q5_answer_2 = document.getElementById("q5-a1")
        var q5_answer_3 = document.getElementById("q5-a3")
        var q5_answer_4 = document.getElementById("q5-a4")
        if(right_answer_5.checked == true) {
            score++
                alert('Question (5) Is Correct')
            }
            else{
                alert('Question (5) Is InCorrect')
            }

            var right_answer_6 = document.getElementById("q6-a4")
            var q6_answer_2 = document.getElementById("q6-a1")
            var q6_answer_3 = document.getElementById("q6-a3")
            var q6_answer_4 = document.getElementById("q6-a2")
            if(right_answer_6.checked == true) {
                score++
                    alert('Question (6) Is Correct')
                }
                else{
                    alert('Question (6) Is InCorrect')
                }

                
            var right_answer_7 = document.getElementById("q7-a4")
            var q7_answer_2 = document.getElementById("q7-a1")
            var q7_answer_3 = document.getElementById("q7-a3")
            var q7_answer_4 = document.getElementById("q7-a2")
            if(right_answer_7.checked == true) {
                score++
                    alert('Question (7) Is Correct')
                }
                else{
                    alert('Question (7) Is InCorrect')
                }
                          
            var right_answer_8 = document.getElementById("q8-a4")
            var q8_answer_2 = document.getElementById("q8-a1")
            var q8_answer_3 = document.getElementById("q8-a3")
            var q8_answer_4 = document.getElementById("q8-a2")
            if(right_answer_8.checked == true) {
                score++
                    alert('Question (8) Is Correct')
                }
                else{
                    alert('Question (8) Is InCorrect')
                }

                var right_answer_9 = document.getElementById("q9-a3")
                var q9_answer_2 = document.getElementById("q9-a1")
                var q9_answer_3 = document.getElementById("q9-a4")
                var q9_answer_4 = document.getElementById("q9-a2")
                if(right_answer_9.checked == true) {
                    score++
                        alert('Question (9) Is Correct')
                    }
                    else{
                        alert('Question (9) Is InCorrect')
                    }

                    var right_answer_10 = document.getElementById("q10-a4")
                    var q10_answer_2 = document.getElementById("q10-a1")
                    var q10_answer_3 = document.getElementById("q10-a4")
                    var q10_answer_4 = document.getElementById("q10-a2")
                    if(right_answer_10.checked == true) {
                        score++
                            alert('Question (10) Is Correct')
                        }
                        else{
                            alert('Question (10) Is InCorrect')
                        }
                        alert("Your Correct Answer : " +" " + score )
}
