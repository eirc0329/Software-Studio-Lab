import * as toxicity from '@tensorflow-models/toxicity';

// set the minimum prediction confidence
const threshold = 0.3;

/**
 * Predict the mood (Happy/Sad/Fear) of a sentence 
 * @param {String}   text The input sentence from user
 * @param {Function} post The props.onPost from PostForm
 */
export async function predict(text, post){
    var moodResult = "Happy";

    // 1 Load your model
    //using await to load the model
    await toxicity.load(threshold).then(model => {
        model.classify(text).then(predictions => {
            console.log(predictions);
            if(predictions[2].results[0].match || predictions[4].results[0].match){
                moodResult = "Fear";
            } else if(predictions[0].results[0].match || predictions[1].results[0].match || predictions[3].results[0].match || predictions[5].results[0].match || predictions[6].results[0].match){
                moodResult = "Sad";
            }
            
            console.log(moodResult);
            post(moodResult, text);
        });
    });
    
    // 2 Utilize the model to classify the input
    //   The output prediction of the model is an array of objects, one for each 
    //   prediction head, that contains the raw probabilities for each input along 
    //   with the final prediction in `match` (either `true` or `false`).
    //   If neither prediction exceeds the threshold, `match` is `null`.
    
    
    // 3 Turn predict result into mood
    //   If the result contains "obscene" or "sexual explicit" then give mood = Fear
    //   Else, if it contains "identity attack", "insult", "insult", "threat", or "toxicity" => Sad
    //   Else => Happy
    // Note: `await` can be used in `async` 
    
    
    
    


}