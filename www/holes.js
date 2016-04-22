<ion-view view-title="Jimmy mc johns bastard">
        <ion-content data-ng-controller="myController" data-ng-init="getData()">
		  <div class="bar bar-header bar-positive">
            <button class="button button-icon icon ion-ios-arrow-left" ui-sref="home"></button>
            <h1 class="title">Challenges</h1>
            </div>
            <br />
            <br />
            <br />
            <div>
                <div class="card" id="challenge1">
                    <div class="item item-text-wrap">
                        <h2 align="center">Challenge 1: {{challenges[0].challenge}}</h2>
                        <div class="item item-toggle-right">
                            <label class="toggle">
                                <input type="checkbox">
                                <div class="track">
                                    <div class="handle"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
        </ion-content>
      </ion-view>