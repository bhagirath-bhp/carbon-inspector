import React from 'react';
import "./styles.css";

function Commentsection() {
  return (
    <>
        <div className="comment-section">
            <div className="cheader">
                <h3>Comments</h3>
            </div>
            <div className="comments">
                <div className="comment-dummy">
                    <div className="datafield1">
                        <div className="datafield1-data1">
                            <div className="profile"></div>
                            <div className="username"><h3>Name</h3><p>date time</p></div>
                        </div>
                        <div className="like"></div>
                    </div>
                    <div className="datafield2">
                        <div className="commentdata">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minima consequuntur soluta veritatis nesciunt perspiciatis quod exercitationem sequi error, voluptatem non qui atque aliquam unde ducimus ut. Voluptate, eum eos.</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Commentsection