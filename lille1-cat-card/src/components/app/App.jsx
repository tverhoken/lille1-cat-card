import React from 'react';
import '../../css/main.css';

function CatCard({title="Random cat card"}) {
    return (
     <div class="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
         <div class="front card text-center shadow-sm">
             <img class="card-img-top" src="https://cataas.com/cat?width=250&height=200" alt="Cat image" width="250" height="200" />
             <div class="card-body">
                 <h5 class="card-title">{title}</h5>
             </div>
         </div>

         <div class="back card text-center shadow-sm">
             <div class="card-body">
                 <h6 class="card-subtitle mb-2 text-muted">Random cat card</h6>
                 <p class="card-text">That card shows a random cat image.</p>
             </div>

             <div class="card-footer">
                 <button href="#" class="btn btn-primary card-link">Edit that cat</button>
             </div>
         </div>
     </div>
    )
}

class App extends React.Component {
   render() {
        var date = new Date().getFullYear();
        return (
            <main>
                <header class="bg-primary">
                    <h1 class="text-white text-center p-3">Cat card app</h1>
                </header>
                <section class="container">
            <h2>Cat card list</h2>
            <hr />
            <div class="card-group">
                <CatCard title="test"></CatCard>
            </div>

            <button class="btn btn-lg btn-danger circle add"><i class="fas fa-plus"></i></button>

            </section>


            <footer class="bg-light">
            <div class="container text-center">
                <i class="far fa-copyright mr-1"></i><label> {date} - Lille 1 </label>
                <span class="small font-italic infos"> No cat has been hurt during the development of this app. </span>
            </div>
            </footer>
        </main>
      );
   }
}
export default App;