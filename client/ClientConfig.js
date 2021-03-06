var igeClientConfig = {
	include: [
		/* Your custom game JS scripts */
		'./GameConfig.js',
		'./gameClasses/Goals.js',
		'./gameClasses/EventEmitter.js',
		'./gameClasses/ui/AssetAnimation.js',
		'./gameClasses/RewardMechanism.js',
		'./gameClasses/GameLogic.js',
		'./gameClasses/EditorManager.js',
		'./gameClasses/ui/Dialog.js',
		'./gameClasses/ui/MarketDialog.js',
		'./gameClasses/ui/EditorDialog.js',
		'./gameClasses/ui/CoinParticle.js',
        './gameClasses/ui/CashDialog.js',
        './gameClasses/ui/CoinDialog.js',
        './gameClasses/ui/BuyStatus.js',
        './gameClasses/ui/BuyConfirm.js',
		'./gameClasses/ui/TutorialViews.js',
		'./gameClasses/ui/EditorViews.js',
		'./gameClasses/ui/Tutorial.js',

        './util.js',
        './crypto-js-hmac.js',
        // try inline span container
        './SpanContainer.js',
        //enable zoom and scroll
		'./LimitZoomPanComponent.js',
		'./ScrollZoomComponent.js',
		'./ScaleToPointComponent.js',
		'./PinchZoomComponent.js',
		// Game objects
		'./gameClasses/base/GameObject.js',
		'./gameClasses/base/Villager.js',
		'./gameClasses/base/HiEntity.js',

		'./GameAssets.js',
		'./GameEarnings.js',
		'./GameGoals.js',
        './clientApiSupport.js',
        './clientBuy.js',
        './clientHelpers.js',
        './gameObjects.js',
        './gameCatalog.js',
       /* './NewsFeed.js', */

		// Graphs
		'./graphs/GraphLevel1.js',
		'./graphs/GraphTutorial.js',
		'./graphs/GraphEditor.js',
		'./graphs/GraphView.js',
		'./graphs/GraphUi.js',
		'./graphs/GraphUiEditor.js',

		/* Standard game scripts */
		'./client.js',
		'./index.js',
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }
