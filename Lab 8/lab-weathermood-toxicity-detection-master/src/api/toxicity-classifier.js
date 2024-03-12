import * as toxicity from '@tensorflow-models/toxicity';
import { ModalBody } from 'reactstrap';

// set the minimum prediction confidence
const threshold = 0.3;

/**
 * Predict the mood (Happy/Sad/Fear) of a sentence 
 * @param {String}   text The input sentence from user
 * @param {Function} post The props.onPost from PostForm
 */
export async function predict(text, post){
    var moodResult = "Happy";

     const toxicity = require('@tensorflow-models/toxicity');

    toxicity.load(0.5).then(model=>{
        const sentences=[text];
        model.classify(sentences).then(predictions=>{
            var arr =[];
            predictions.forEach((text, i) => {
                //  console.log(text.label)
                //  console.log(text.results[0].match);
                 arr.push(text.results[0].match);
            });
             console.log(arr);
            if(arr[2] === true||arr[4] === true){
                moodResult = 'Fear'; 
            }else if(arr[0] === true || arr[1] === true || arr[3] === true||arr[5]===true||arr[6]===true){
                moodResult = 'Sad'; 
            }else{
                moodResult = 'Happy';
            }
            console.log(moodResult);
            post(moodResult, text);
        });
    });

    // 1 Load your model
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