import { useRef } from "react"

export const useMicrophone = () => {

    const streamRef = useRef<MediaStream | null>(null);

    const requestMicrophonePermission = async () => {

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;
            console.log("Microphone permission granted");
            return stream;
        }
        catch (err) {
            console.error("Error accessing microphone:", err);
            return null
        }
    }

    return { requestMicrophonePermission }

}