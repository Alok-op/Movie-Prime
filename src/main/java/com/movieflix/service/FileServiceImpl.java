package com.movieflix.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FileServiceImpl implements FileService {

    // Upload the file to Server
    @Override
    public String uploadFile(String path, MultipartFile file) throws IOException {

        // Get the original name of the uploaded file (e.g., "image.jpg")
        String fileName = file.getOriginalFilename();

        // Build the full path where the file will be saved (e.g., "uploads/image.jpg")
        String filePath = path + File.separator + fileName;

        // Create a folder (if it doesn't exist)
        File f = new File(path);
        if(!f.exists()) {
            f.mkdir();     // creates the folder
        }

        // Copy the uploaded file content to the destination folder
        Files.copy(
                file.getInputStream(),
                Paths.get(filePath),
                StandardCopyOption.REPLACE_EXISTING     // replace if file already exists
        );

        // Return the name of the uploaded file
        return fileName;
    }

    // Read the file from server
    @Override
    public InputStream getResourceFile(String path, String fileName) throws FileNotFoundException {

        // Build the full file path
        String filePath = path + File.separator + fileName;

        // Create and return and input stream to read the file
        return new FileInputStream(filePath);
    }

}
