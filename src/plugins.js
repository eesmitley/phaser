/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * @namespace Phaser.Plugins
 */
var Plugins = {

    /**
     * These are the Global Managers that are created by the Phaser.Game instance.
     * They are referenced from Scene.Systems so that plugins can use them.
     * 
     * @name Phaser.Plugins.Global
     * @type {array}
     * @since 3.0.0
     */
    Global: [

        'anims',
        'cache',
        'registry',
        'sound',
        'textures'

    ],

    /**
     * These are the core plugins that are installed into every Scene.Systems instance, no matter what.
     * They are optionally exposed in the Scene as well (see the InjectionMap for details)
     * 
     * They are created in the order in which they appear in this array and EventEmitter is always first.
     * 
     * @name Phaser.Plugins.CoreScene
     * @type {array}
     * @since 3.0.0
     */
    CoreScene: [

        'EventEmitter',

        'CameraManager',
        'GameObjectCreator',
        'GameObjectFactory',
        'ScenePlugin',
        'DisplayList',
        'UpdateList'

    ],

    /**
     * These plugins are created in Scene.Systems in addition to the CoreScenePlugins.
     * 
     * You can elect not to have these plugins by either creating a DefaultPlugins object as part
     * of the Game Config, by creating a Plugins object as part of a Scene Config, or by modifying this array
     * and building your own bundle.
     * 
     * They are optionally exposed in the Scene as well (see the InjectionMap for details)
     * 
     * They are always created in the order in which they appear in the array.
     * 
     * @name Phaser.Plugins.DefaultScene
     * @type {array}
     * @since 3.0.0
     */
    DefaultScene: [

        'CameraManager3D',
        'Clock',
        'DataManagerPlugin',
        'InputPlugin',
        'Loader',
        'TweenManager',
        'LightsPlugin'

    ]

};

/*
 * "Sometimes, the elegant implementation is just a function.
 * Not a method. Not a class. Not a framework. Just a function."
 *  -- John Carmack
 */

module.exports = Plugins;
