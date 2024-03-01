// React
import React from 'react';


function ConsiderationsShulk(props) {

    return (
        <>
            <h4>Monado Arts</h4>
            <p className="small">Due to Shulk's ability to switch arts while in hitstun, comboing him does not work the same way as it works vs other characters.</p>
            <p className="small">Even if Shield art and Smash art are both recharging, MALLC allows Shulk to cancel his hitstun via an art switch any time he touches the ground during a combo. Due to these options, in most cases it is in Kazuya's best interest to go for simple conversions that place Shulk in a bad position, such as GOH to put him offstage, rather than try to combo him like a normal character. Simple electric kill confirms are also viable while Shield art is on recharge.</p>
            <p className="small">While he is able to switch during hitstun, Shulk cannot switch arts while being grabbed, while crumpled, or while tripped. Electric's knockback after the stun is based on the art Shulk was in when first hit, not on the art he is in when launched.</p>
            <br />

            <h4>Shulk-Specific Routes</h4>
            <p className="small">If Shulk is hit by electric while in Shield art, Kazuya's best option is to follow up with DGF and repeat. He cannot switch arts while crumpled and this means it can be looped until Shield runs out or Shulk decides to cancel it. Regardless of when the art ends during this loop, Kazuya is able to convert. While this can technically be escaped via MALLC, the timing is incredibly tight.</p>
            <br />

            <h4>Electric on Block</h4>
            <p className="small mb-0">In specific circumstances, Shulk has the unique ability to true punish electric on block. If Kazuya hits Shulk's shield with an electric while he is in speed art, Shulk hits the ground first and can use dial flash from a buffered dial to gain frame advantage. If Kazuya did not perfectly space the electric, this allows Shulk to punish with dtilt or, if he has dial storage, ftilt.</p>
        </>
    );
}

export default ConsiderationsShulk;