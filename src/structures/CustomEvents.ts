import type { Player } from "./Player";
import type { Track, UnresolvedTrack } from "./Types/Track";

export interface CustomEvents {
    /**
     * Emitted when tracks are added to the queue
     * @event CustomEvents#queueSongAdd
     */
    "queueSongAdd": (tracks: (Track | UnresolvedTrack)[]) => void;

    /**
     * Emitted when tracks are removed from the queue
     * @event CustomEvents#queueSongRemove
     */
    "queueSongRemove": (removed: { removed: (Track | UnresolvedTrack)[] }) => void;

    /**
     * Emitted when the queue is cleared
     * @event CustomEvents#queueClear
     */
    "queueClear": () => void;

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