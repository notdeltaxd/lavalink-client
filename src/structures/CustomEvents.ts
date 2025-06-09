import { Player } from "./Player";
import { Track } from "./Types/Track";

export interface CustomEvents {
    /**
     * Emitted when a track is added to the queue
     * @event CustomEvents#queueSongAdd
     */
    "queueSongAdd": (player: Player, track: Track) => void;

    /**
     * Emitted when a track is removed from the queue
     * @event CustomEvents#queueSongRemove
     */
    "queueSongRemove": (player: Player, track: Track) => void;

    /**
     * Emitted when the queue is cleared
     * @event CustomEvents#queueClear
     */
    "queueClear": (player: Player) => void;

    /**
     * Emitted when the player's position changes significantly (e.g. seeking)
     * @event CustomEvents#playerPositionUpdate
     */
    "playerPositionUpdate": (player: Player, position: number) => void;

    /**
     * Emitted when the player's volume changes
     * @event CustomEvents#playerVolumeUpdate
     */
    "playerVolumeUpdate": (player: Player, volume: number) => void;

    /**
     * Emitted when the player's repeat mode changes
     * @event CustomEvents#playerRepeatModeUpdate
     */
    "playerRepeatModeUpdate": (player: Player, mode: "off" | "track" | "queue") => void;

    /**
     * Emitted when the player's autoplay state changes
     * @event CustomEvents#playerAutoplayUpdate
     */
    "playerAutoplayUpdate": (player: Player, enabled: boolean) => void;

    /**
     * Emitted for real-time position updates (more frequent than playerUpdate)
     * @event CustomEvents#playerPositionTick
     */
    "playerPositionTick": (player: Player, position: number) => void;
} 